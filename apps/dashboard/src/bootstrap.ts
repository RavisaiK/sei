import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ChartsComponent } from '../src/app/charts/charts.component';

bootstrapApplication(ChartsComponent, appConfig).catch((err) => console.error(err));
