import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  protected errorMessage = '';
  protected loginForm;
  @Output() newTaskData = new EventEmitter<{}>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  onSubmit() {
    this.newTaskData.emit(this.loginForm.value);
    console.log("Datos enviados a componente padre: ", this.loginForm.value);
  }
}
