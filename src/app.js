const { app, dialog, BrowserWindow, ipcMain } = require("electron")
const {exec} = require("child_process")
app.on("ready", () => {
    const window = new BrowserWindow({width: 1000, height: 500, webPreferences: {devTools: true, preload: `${__dirname}/preload.js`}})
    window.loadFile(__dirname + "/file.html")
})
ipcMain.on("askForFiles", () => {
    let files = dialog.showOpenDialogSync({properties: ["multiSelections", "openFile"]})
    if (typeof files != "undefined") {
        files.forEach(elem => {
            exec(`xattr "${elem}"`, (err, stdout) => {
                if (stdout.includes("com.apple.quarantine")) {
                    exec(`xattr -d com.apple.quarantine "${elem}"`, (err) => {
                        if (err) {
                            dialog.showMessageBoxSync({
                                message: `An error occured. ${elem} was not able to be cracked.`,
                                type: "error"
                            })
        
                        }
                    })
                }
            })
        })
        dialog.showMessageBoxSync({
            message: "Completed picking the locks!",
            type: "info"
        })
    }
})