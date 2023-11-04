import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment.prod';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routing';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideAnimations()
  ]
}).catch(err => console.error(err));
