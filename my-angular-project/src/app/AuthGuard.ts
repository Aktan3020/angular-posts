import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Подключите ваш сервис аутентификации

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getAuth()) {
      return true;
    } else {
      this.router.navigate(['/']); // Перенаправление на страницу входа
      return false;
    }
  }
}
