import { ipcRenderer } from 'electron';

export default class rpcRenderProxy {
    send(cmd) {
        ipcRenderer.send(cmd);
    }
}
