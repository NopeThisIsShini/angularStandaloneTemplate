import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { local_routes } from '../../../utils/routes/local.route';
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
