import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableSkeletonComponent } from '../../../shared/skeleton/table-skeleton/table-skeleton.component';
import { CommonTableComponent } from '../../../shared/components/UI/common-table/common-table.component';
import { InputTextComponent } from '../../../shared/components/UI/input-text/input-text.component';
import { MultiselectComponent } from '../../../shared/components/UI/multi-select/multi-select.component';
import { SelectComponent } from '../../../shared/components/UI/select/select.component';
import { PrimengModule } from '../../../shared/lib/primeng.module';
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
