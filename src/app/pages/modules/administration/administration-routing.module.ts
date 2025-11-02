import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'roles',
        pathMatch: 'full'
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('../role/role.module').then(
            (m) => m.RoleModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then(
            (m) => m.UsersModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
