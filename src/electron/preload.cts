import electron from "electron";

const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    subscribeStatistics: (callback: (statistics: any) => void) => {
        electron.ipcRenderer.on('statistics', (event, statsData) => {
            callback(statsData)
        });
    },
    getStaticData: () => electron.ipcRenderer.invoke('getStaticData')
});