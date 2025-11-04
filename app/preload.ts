import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    isElectron: true,
    checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    onUpdateAvailable: (callback: (message: string) => void) => ipcRenderer.on('update-available', (_, msg) => callback(msg)),
    onUpdateDownloaded: (callback: () => void) => ipcRenderer.on('update-downloaded', callback),
    quitAndInstall: () => ipcRenderer.send('quit-and-install')
});
