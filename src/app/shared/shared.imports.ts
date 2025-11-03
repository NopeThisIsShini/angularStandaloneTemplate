import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from './lib';
import { CommonTableComponent, InputTextComponent, SelectComponent } from './components';
import { RouterLink } from '@angular/router';

export const SharedImports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PrimengModule,
  InputTextComponent,
  CommonTableComponent,
  SelectComponent,
  RouterLink
];
