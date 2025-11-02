import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(
    private electronService: ElectronService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    if (this.electronService.isElectron) {
      console.log('Run in electron');
      this.electronService.onUpdateAvailable((msg) => {
        this.messageService.add({
          severity: 'info',
          summary: 'Info',
          detail: msg,
        });
      });
      this.electronService.onUpdateDownloaded(() => {
        if (confirm('Update downloaded. Restart now?')) {
          this.electronService.quitAndInstall();
        }
      });
    } else {
    }
  }
}
