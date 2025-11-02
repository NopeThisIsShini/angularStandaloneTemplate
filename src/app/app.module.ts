import {
  APP_INITIALIZER,
  enableProdMode,
  importProvidersFrom,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { provideRouter, RouterOutlet } from '@angular/router';
import { baseUrlInterceptor } from './utils/interceptor/base-url.interceptor';
import { authInterceptor } from './utils/interceptor/auth.interceptor';
import { CoreModule } from './core/core.module';
import { APP_CONFIG } from '../environments/environment';
import { errorInterceptor } from './utils/interceptor/error.interceptor';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppConfigurator } from './layout/components/app.configurator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LoaderComponent } from './shared/components/loader';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfigService } from './shared/services/api/config.service';
// initializer
export function initializeApp(configServ: ConfigService): () => Promise<void> {
  return () => lastValueFrom(configServ.loadUserAndPermissions());
}
if (APP_CONFIG.production) {
  enableProdMode();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ToastModule,
    CommonModule,
    AppConfigurator,
    ConfirmDialogModule,
    LoaderComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    MessageService,
    DialogService,
    ConfirmationService,
    importProvidersFrom(CoreModule, SharedModule),
    provideHttpClient(
      withFetch(),
      withInterceptors([baseUrlInterceptor, errorInterceptor, authInterceptor])
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          // darkModeSelector: '.my-app-dark' // if need toggle dark mode
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, primeng, another-css-library',
          },
        },
      },
      inputVariant: 'outlined', // outlined , filled
      ripple: true,
      zIndex: {
        modal: 1100, // dialog, sidebar
        overlay: 1000, // dropdown, overlaypanel
        menu: 1000, // overlay menus
        tooltip: 1100, // tooltip
      },
      translation: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //translations
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
