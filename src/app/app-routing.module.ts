import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { local_routes } from './utils/routes/local.route';
import { authGuard } from './utils/guard/auth.guard';
import { AppLayout } from './layout/components/app.layout';

const routes: Routes = [
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
          import('../app/pages/modules/administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../app/pages/modules/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
    ],
  },

  {
    path: local_routes.auth,
    loadChildren: () =>
      import('../app/pages/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // { path: 'landing', component: Landing },
  // { path: 'notfound', component: Notfound },
  // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
