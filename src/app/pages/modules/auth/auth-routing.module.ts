import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { local_routes } from '../../../utils/routes/local.route';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: local_routes.login,
        pathMatch: 'full',
      },
      {
        path: local_routes.login,
        component: LoginComponent,
      },
      {
        path: local_routes.signup,
        component: SignupComponent,
      },
      // {
      //     path: local_routes.resetpassword,
      //     component: ResetPasswordComponent
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
