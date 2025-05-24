import {ipcMain, type WebContents} from "electron";

function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

function ipcMainHandle<Key extends keyof EventPayloadMapping, >(
    key: Key,
    handler: () => EventPayloadMapping[Key]
) {
    ipcMain.handle(key, () => handler())
}

function ipcWebContentsSend<Key extends keyof EventPayloadMapping>(
    key: Key,
    webContents: WebContents,
    payload: EventPayloadMapping[Key],
) {
    webContents.send(key, payload)
}

export {
    isDev,
    ipcMainHandle,
    ipcWebContentsSend
};