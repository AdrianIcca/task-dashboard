import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), FormsModule]
});
