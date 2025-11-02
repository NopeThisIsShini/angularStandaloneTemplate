import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .then(() => {
    // Safely remove loader once Angular is ready
    const loader = document.getElementById('app-loader');
    const appRoot = document.querySelector('app-root');

    if (loader && appRoot instanceof HTMLElement) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
        appRoot.style.display = 'block';
      }, 300); // fade-out time
    }
  })
  .catch((err) => console.error(err));
