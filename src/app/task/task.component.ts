import { Component, Input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Task {
  id: number;
  name: string;
  description: string;
  completed: WritableSignal<boolean>;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()task!: Task;

  toggleTask() {
    this.task.completed.set(!this.task.completed());
  }
}
