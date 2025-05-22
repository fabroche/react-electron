const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    subscribeStatistics: (callback: (statistics: any) => void) => callback({}),
    getStaticData: () => console.log('static')
});