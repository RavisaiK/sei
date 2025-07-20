import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { UsersComponent } from './app/users/users.component';

bootstrapApplication(UsersComponent, appConfig).catch((err) => console.error(err));
