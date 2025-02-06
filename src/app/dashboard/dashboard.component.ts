import { Component, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../auth.service';
import { Task, TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  protected tasks: Task[] = [
    { id: 1, name: 'Tarea 1', description: 'Descripción de la tarea 1', completed: signal(false) },
    { id: 2, name: 'Tarea 2', description: 'Descripción de la tarea 2', completed: signal(false) },
    { id: 3, name: 'Tarea 3', description: 'Descripción de la tarea 3', completed: signal(false) },
    { id: 4, name: 'Tarea 4', description: 'Descripción de la tarea 4', completed: signal(false) },
  ];
  showCompleted: boolean = false;
  newTask: WritableSignal<boolean> = signal(false);

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  toogleNewTask() {
    this.newTask.set(!this.newTask());
  }

  recieveData(data: any) {
    const task = {
      id: this.tasks.length + 1,
      name: data.name,
      description: data.description,
      completed: signal(false)
    };
    if (data.created) {
      this.newTask.set(false);
    }
    this.createTask(task);
  }

  createTask(task: Task) {
    this.tasks.push(task);
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }
}