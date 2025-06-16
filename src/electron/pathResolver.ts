import path from "path";
import {app} from "electron";
import {isDev} from "./util.js";

function getPreloadPath() {
    return path.join(
        app.getAppPath(),
        isDev() ? "." : "..",
        'dist-electron/preload.cjs'
    );
}

function getUIPath() {
    return path.join(app.getAppPath(), '/dist-react/index.html');
}

export {
    getPreloadPath,
    getUIPath
}