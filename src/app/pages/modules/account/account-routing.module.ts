import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { SmtpComponent } from './component/smtp/smtp.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LOCAL_ROUTES } from '../../../utils/routes/local.route';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
     {
        path: '',
        redirectTo: LOCAL_ROUTES.PROFILE,
        pathMatch: 'full',
      },
      {
        path: LOCAL_ROUTES.PROFILE,
        component: ProfileComponent,
      },
      {
        path: LOCAL_ROUTES.SMTP,
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
