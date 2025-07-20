import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('users/Routes').then((m) => m?.remoteRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m?.remoteRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
];
