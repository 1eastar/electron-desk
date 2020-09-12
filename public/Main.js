const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
    const size = {
        width: 1200,
        height: 800,
    }
    const win = new BrowserWindow(size)

    const inProduction = {
        pathname: path.join(__dirname, '/../bulid/index.html'),
        protocol: 'file:',
        slashes: true,
    }
    const startUrl = process.env.ELECTRON_START_URL || url.format(inProduction)

    win.loadURL(startUrl)
}

app.on('ready', createWindow)