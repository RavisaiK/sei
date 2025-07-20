
import { Route } from '@angular/router';
import { ChartsComponent } from '../app/charts/charts.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ChartsComponent,
    pathMatch: 'full'
  }
];
