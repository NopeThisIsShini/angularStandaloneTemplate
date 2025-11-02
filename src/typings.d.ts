export { };

declare global {
  interface Window {
    electronAPI: {
      isElectron: boolean;
      checkForUpdates: () => Promise<void>;
      getAppVersion: () => Promise<string>;
      onUpdateAvailable: (cb: (msg: string) => void) => void;
      onUpdateDownloaded: (cb: () => void) => void;
      quitAndInstall: () => void;
      getUserInfo: () => Promise<{ name: string; role: string }>;
    };
  }
}
