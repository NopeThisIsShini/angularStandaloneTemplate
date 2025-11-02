import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PermissionComponent } from '../../../shared/components/permission/permission.component';
import { TableSkeletonComponent } from '../../../shared/skeleton/table-skeleton/table-skeleton.component';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { PrimengModule } from '../../../lib/primeng.module';
import { CommonTableComponent } from '../../../shared/components/common-table/common-table.component';
@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    PermissionComponent,
    TableSkeletonComponent,
    InputTextComponent,
    PrimengModule,
    CommonTableComponent,
  ],
})
export class RoleModule {}
