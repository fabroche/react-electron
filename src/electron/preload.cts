import electron from "electron";

const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    subscribeStatistics: (callback) => {
        electron.ipcRenderer.on('statistics', (event, statsData) => {
            callback(statsData)
        });
    },
    getStaticData: () => electron.ipcRenderer.invoke('getStaticData')
}satisfies Window['electronAPI']);