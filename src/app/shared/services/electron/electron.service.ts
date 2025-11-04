import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    checkForUpdates(): void {
        window.electronAPI.checkForUpdates();
    }

    getAppVersion(): Promise<string> {
        return window.electronAPI.getAppVersion();
    }

    onUpdateAvailable(callback: (msg: string) => void): void {
        window.electronAPI.onUpdateAvailable(callback);
    }

    onUpdateDownloaded(callback: () => void): void {
        window.electronAPI.onUpdateDownloaded(callback);
    }

    quitAndInstall(): void {
        window.electronAPI.quitAndInstall();
    }
    get isElectron(): boolean {
        return !!(window && (window as any).electronAPI?.isElectron);
    }
}
