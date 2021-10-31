import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
    sendHelloWorldEvent: () => ipcRenderer.send('hello-world'),
});
