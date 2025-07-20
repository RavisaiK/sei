import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '@sei/shared';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private router = inject(Router);
  protected title = 'sei';
  public authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get auth() {
    return this.authService.auth();
  }
}
