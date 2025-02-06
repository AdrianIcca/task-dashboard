import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);
  constructor(private router: Router) { 
    this.isAuthenticated.set(!!localStorage.getItem("user"));
  }

  login(username: string, password: string) {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username);
      this.isAuthenticated.set(true);
      this.router.navigate(["/dashboard"]);
      return true
    }
    return false;    
  }

  logout() {
    localStorage.removeItem("user");
    this.isAuthenticated.set(false);
    this.router.navigate(["/login"]);
  }
}
