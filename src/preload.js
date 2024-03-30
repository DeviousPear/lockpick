const { contextBridge, ipcRenderer } = require("electron")
contextBridge.exposeInMainWorld("apis", {ask: () => ipcRenderer.send("askForFiles"), })
