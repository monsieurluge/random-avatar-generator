const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// --------------------------------------------------------------------- GLOBALS

app.devmode = function() {
  app.win.webContents.openDevTools()
}

// -------------------------------------------------------------------- ON READY

app.on('ready', () => {
  app.win = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: false,
    frame: false,
    backgroundColor: '#212121',
    skipTaskbar: process.platform === 'darwin',
    autoHideMenuBar: process.platform === 'darwin',
    webPreferences: { zoomFactor: 1.0 },
  })

  app.win.loadURL(url.format({
    pathname: path.join(__dirname, '/sources/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  app.devmode()

  app.on('activate', () => {
    (app.win === null)
      ? createWindow()
      : app.win.show()
  })

  app.win.on('closed', () => {
    win = null
    app.quit()
  })

  app.on('window-all-closed', () => {
    win = null
    app.quit()
  })
})
