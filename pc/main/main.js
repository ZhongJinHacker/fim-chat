import { app, BrowserWindow } from 'electron';
import windowStateKeeper from 'electron-window-state';


import pkg from '../package.json';

let isFullScreen = false;
let isWin = process.platform === 'win32';
let isOsx = process.platform === 'darwin';
let mainWindow;

const createMainWindow = () => {
    var mainWindowState = windowStateKeeper({
        defaultWidth: 745,
        defaultHeight: 500,
    });

    mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        minWidth: 745,
        minHeight: 450,
        transparent: true,
        titleBarStyle: 'hiddenInset',
        backgroundColor: 'none',
        resizable: false,
        webPreferences: {
            scrollBounce: true,
            nodeIntegration: true,
        },
        frame: !isWin,
    });

    mainWindow.setSize(350, 460);
    mainWindow.loadURL(
        `file://${__dirname}/../render/index.html`
    );
};

app.setName(pkg.name);

app.on('ready', createMainWindow);
app.on('activate', e => {
    if (!mainWindow.isVisible()) {
        mainWindow.show();
    }
})
