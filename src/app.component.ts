import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppConfigurator } from './app/layout/components/app.configurator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ElectronService } from './app/shared/services/electron/electron.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, RouterOutlet, ToastModule, AppConfigurator, ConfirmDialogModule],
    template: `
        <router-outlet />
        <app-configurator />
        <p-confirmdialog />
        <p-toast />
    `
})
export class AppComponent implements OnInit {
    electronService = inject(ElectronService);
    messageService = inject(MessageService);
    ngOnInit() {
        if (this.electronService.isElectron) {
            console.log('Run in electron');
            this.electronService.onUpdateAvailable((msg) => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Info',
                    detail: msg
                });
            });
            this.electronService.onUpdateDownloaded(() => {
                if (confirm('Update downloaded. Restart now?')) {
                    this.electronService.quitAndInstall();
                }
            });
        }
    }
}
