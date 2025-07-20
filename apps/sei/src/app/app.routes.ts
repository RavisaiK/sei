import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m?.remoteRoutes),
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
];
