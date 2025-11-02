import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableSkeletonComponent } from '../../../shared/skeleton/table-skeleton/table-skeleton.component';
import { CommonTableComponent } from '../../../shared/components/common-table/common-table.component';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { MultiselectComponent } from '../../../shared/components/multi-select/multi-select.component';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { PrimengModule } from '../../../lib/primeng.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableSkeletonComponent,
    CommonTableComponent,
    InputTextComponent,
    MultiselectComponent,
    SelectComponent,
    PrimengModule,
  ],
})
export class UsersModule {}
