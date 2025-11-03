import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/components/app.layout';
import { authGuard } from './app/utils/guard';
import { LOCAL_ROUTES } from './app/utils/routes';


export const appRoutes: Routes = [
   {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'administration',
        loadChildren: () =>
          import('./app/pages/modules/administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./app/pages/modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
    ],
  },

  {
    path: LOCAL_ROUTES.AUTH,
    loadChildren: () =>
      import('./app/pages/auth').then((m) => m.AUTH_ROUTES),
  },
  
  // { path: 'landing', component: Landing },
  // { path: 'notfound', component: Notfound },
  // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'notfound' },
];
