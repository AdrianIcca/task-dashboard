import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  protected loginForm;
  protected errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (this.authService.login(username || '', password || '')) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  
}
