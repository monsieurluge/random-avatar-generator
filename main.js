const electron = require('electron')
const path = require('path')
const url = require('url')

const app = electron.app // module to control application life
const BrowserWindow = electron.BrowserWindow // module to create native browser window

// keep a global reference of the window object, if you don't, the window will be
//   closed automatically when the JavaScript object is garbage collected
let mainWindow

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 500, height: 500, resizable: false })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    // mainWindow.webContents.openDevTools()
}

// ---------------------------------------------------------------------- EVENTS

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        // on OS X it is common for applications and their menu bar
        //   to stay active until the user quits explicitly with Cmd + Q
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        // on OS X it's common to re-create a window in the app when the
        //   dock icon is clicked and there are no other windows open
        createWindow()
    }
})
