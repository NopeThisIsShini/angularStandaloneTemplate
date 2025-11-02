import { app, BrowserWindow, screen, Menu, dialog, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import * as path from 'path';
import * as fs from 'fs';

let win: BrowserWindow | null = null;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

// Auto-updater: manual trigger via IPC
ipcMain.handle('check-for-updates', () => {
  return autoUpdater.checkForUpdatesAndNotify();
});

ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

ipcMain.on('quit-and-install', () => {
  autoUpdater.quitAndInstall();
});

// Broadcast update events to renderer
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for update...');
});

autoUpdater.on('update-available', () => {
  console.log('Update available.');
  win?.webContents.send('update-available', 'A new version is downloading...');
});

autoUpdater.on('update-not-available', () => {
  console.log('No update available.');
});

autoUpdater.on('error', (err) => {
  console.error('Auto-updater error:', err);
});

autoUpdater.on('download-progress', (progressObj) => {
  const log_message = `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred}/${progressObj.total})`;
  console.log(log_message);
});

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded');
  win?.webContents.send('update-downloaded');
});


function createWindow(): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: !serve,
      allowRunningInsecureContent: serve,
    },
  });

  if (serve) {
    import('electron-debug').then(debug => debug.default({ isEnabled: true, showDevTools: true }));
    import('electron-reloader').then(reloader => {
      const reloaderFn = (reloader as any).default || reloader;
      reloaderFn(module);
    });
    win.loadURL('http://localhost:4200');
  } else {
    let indexPath = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      indexPath = '../dist/index.html';
    }

    const fullPath = path.join(__dirname, indexPath);
    win.loadURL(`file://${path.resolve(fullPath).replace(/\\/g, '/')}`);
  }

  // Menu with "Check for Updates" and "About"
  const template: any[] = [
    {
      label: 'Help',
      submenu: [
        {
          label: 'Check for Updates',
          click: () => {
            // Clear previous listeners to avoid stacking
            autoUpdater.removeAllListeners('update-not-available');
            autoUpdater.removeAllListeners('error');

            // Set up fresh one-time listener
            autoUpdater.once('update-not-available', () => {
              dialog.showMessageBox(win!, {
                type: 'info',
                title: 'No Updates',
                message: 'You are using the latest version.'
              });
            });

            autoUpdater.once('error', (err) => {
              dialog.showMessageBox(win!, {
                type: 'error',
                title: 'Update Error',
                message: `Failed to check for updates: ${err.message}`
              });
            });

            // Initiate update check
            autoUpdater.checkForUpdatesAndNotify().catch(err => {
              dialog.showMessageBox(win!, {
                type: 'error',
                title: 'Update Error',
                message: `Check failed: ${err.message}`
              });
            });
          }
        },
        {
          label: 'About',
          click: async () => {
            const version = await app.getVersion();
            dialog.showMessageBox(win!, {
              type: 'info',
              title: 'About',
              message: `App Version: ${version}`
            });
          }
        }
      ]
    }
  ];


  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // win.on('closed', () => {
  //   win = null;
  // });
  win.on('close', (event) => {
  event.preventDefault(); // Prevent window from closing
  // Optionally: hide or minimize instead
  // win.hide(); // Hides the window (useful for system tray apps)
  // win.minimize(); // Minimizes instead of closing
}); // stop close


  return win;
}

try {
  app.on('ready', () => {
    setTimeout(() => {
      createWindow();

      if (!serve) {
        setTimeout(() => {
          autoUpdater.checkForUpdatesAndNotify();
        }, 3000);
      }
    }, 400); // Fixes initial black screen
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  console.error('Error during app bootstrap:', e);
}
