import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    const auth = this.authService.auth();
    if (auth && auth.accessToken) {
      return true;
    }
    return this.router.createUrlTree(['/']);
  }
}
