import {ipcMain, type WebContents, WebFrameMain} from "electron";
import {getUIPath} from "./pathResolver.js";
import {pathToFileURL} from "url";

function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

function ipcMainHandle<Key extends keyof EventPayloadMapping, >(
    key: Key,
    handler: () => EventPayloadMapping[Key]
) {
    ipcMain.handle(key, (event) => {

        if (event.senderFrame) validateEventFrame(event.senderFrame);

        return handler()
    })
}

function ipcWebContentsSend<Key extends keyof EventPayloadMapping>(
    key: Key,
    webContents: WebContents,
    payload: EventPayloadMapping[Key],
) {
    webContents.send(key, payload)
}

function validateEventFrame(frame: WebFrameMain) {
    console.log(frame.url)

    if (isDev() && new URL(frame.url).host === 'localhost:5123') {
        return;
    }

    if (frame.url !== pathToFileURL(getUIPath()).toString()) {
        throw new Error('Malicious Event');
    }
}

export {
    isDev,
    ipcMainHandle,
    ipcWebContentsSend
};