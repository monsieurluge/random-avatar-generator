const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// --------------------------------------------------------------------- GLOBALS

app.devmode = function() {
    app.win.setSize(1000, 500)

    app.win.webContents.openDevTools()
}

// -------------------------------------------------------------------- ON READY

app.on('ready', () => {
    app.win = new BrowserWindow({
        width: 500,
        height: 500,
        minWidth: 500,
        minHeight: 500,
        resizable: true,
        frame: false,
        backgroundColor: '#212121',
        webPreferences: { zoomFactor: 1.0 },
    })

    app.win.loadURL(url.format({
        pathname: path.join(__dirname, '/sources/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    app.devmode()

    app.win.on('closed', () => {
        win = null

        app.quit()
    })

    app.on('activate', () => {
        if (app.win === null) {
            // on OS X it's common to re-create a window in the app when the
            //   dock icon is clicked and there are no other windows open
            createWindow()
        }
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            // on OS X it is common for applications and their menu bar
            //   to stay active until the user quits explicitly with Cmd + Q
            app.quit()
        }
    })
})
