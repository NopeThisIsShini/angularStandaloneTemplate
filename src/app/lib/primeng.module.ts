import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { FloatLabel } from 'primeng/floatlabel';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { Ripple } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Tag } from 'primeng/tag';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabsModule } from 'primeng/tabs';
import { MenuModule } from 'primeng/menu';
import { SelectModule } from 'primeng/select';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Avatar } from 'primeng/avatar';
import { GalleriaModule } from 'primeng/galleria';
import { DatePickerModule } from 'primeng/datepicker';
import { ImageModule } from 'primeng/image';
import { PopoverModule } from 'primeng/popover';
import { DrawerModule } from 'primeng/drawer';
import { FileUploadModule } from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { Toolbar } from 'primeng/toolbar';

import { SplitButton } from 'primeng/splitbutton';

import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
const primengModules = [
  ButtonModule,
  Dialog,
  CheckboxModule,
  InputTextModule,
  PasswordModule,
  RippleModule,
  FloatLabel,
  StyleClassModule,
  TableModule,
  Ripple,
  ToolbarModule,
  ConfirmDialog,
  Tag,
  ReactiveFormsModule,
  InputNumber,
  IconFieldModule,
  InputIconModule,
  TabMenuModule,
  TabsModule,
  MenuModule,
  SelectModule,
  AvatarGroupModule,
  Avatar,
  GalleriaModule,
  DatePickerModule,
  ImageModule,
  PopoverModule,
  DrawerModule,
  FileUploadModule,
  DividerModule,
  Toolbar,
  SplitButton,
  IconField,
  InputIcon,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
