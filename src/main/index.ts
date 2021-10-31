import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 500,
        height: 800,
    });

    win.loadFile('public/index.html');
})