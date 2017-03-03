import { app, BrowserWindow } from "electron";
import path from "path";
import electronDebug from "electron-debug";
import url from "url";
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer";

const EXTENSIONS = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];

electronDebug({ showDevTools: true });

let mainWindow = null;

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({ width: 1000, height: 800 });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "/src/index.html"),
    protocol: "file:",
    slashes: true,
  }));
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  EXTENSIONS.forEach(addExtension);

});

function addExtension(extension) {
  installExtension(extension)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));
}