import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../../pages/services/api/auth.service';

@Component({
  selector: 'app-unauthorised-popup',
  imports: [ButtonModule],
  templateUrl: './unauthorised-popup.component.html',
  styleUrl: './unauthorised-popup.component.scss',
})
export class UnauthorisedPopupComponent {
  constructor(
    private authService: AuthService,
    private ref: DynamicDialogRef
  ) {}
  logout() {
    this.authService.logout();
    this.ref.close();
  }
}
