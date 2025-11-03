import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SmtpComponent } from './component/smtp/smtp.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabsModule } from 'primeng/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

import { AvatarModule } from 'primeng/avatar';
import { InputTextComponent } from '../../../shared/components/UI/input-text/input-text.component';

@NgModule({
  declarations: [AccountComponent, SmtpComponent, ProfileComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TabMenuModule,
    TabsModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextComponent,
    AvatarModule
  ]
})
export class AccountModule { }
