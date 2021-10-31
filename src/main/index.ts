import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

app.on('ready', () => {
    // Example of adding a listener for hello-world event the ContextBridge
    ipcMain.on('hello-world', () => {
        console.log('Hello world from Main thread!');
    });

    const win = new BrowserWindow({
        width: 500,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('public/index.html');
});
