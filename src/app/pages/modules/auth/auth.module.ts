import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { PrimengModule } from '../../../lib/primeng.module';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    FormsModule,
    InputTextComponent,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
