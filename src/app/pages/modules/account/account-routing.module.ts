import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { SmtpComponent } from './component/smtp/smtp.component';
import { ProfileComponent } from './component/profile/profile.component';
import { local_routes } from '../../../utils/routes/local.route';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: local_routes.profile,
        pathMatch: 'full',
      },
      {
        path: local_routes.profile,
        component: ProfileComponent,
      },
      {
        path: local_routes.smtp,
        component: SmtpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
