const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;
const dialog = electron.dialog;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let win;

app.on('ready',function(){
 win = new electron.BrowserWindow({
    height: 500,
    width: 500
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname,"index.html"),
    protocol: 'file:'
  }));  

/*   let menuTemplate = [
  {
    label: 'Menu 1'
  },
  {
    label: 'Menu 2',
    submenu:[
      {
        label: 'Hello',
        click: function(item, win, event){
          dialog.showMessageBox(win, {
            title: "Hello From menu",
            message: "Hi, this is submenu",
            buttons:[]
          })
        }
       }
  ]
  }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
   */

 /*  dialog.showMessageBox(win, {
    type: 'none',
    message: 'Hello from dialog',
    title: 'son',
  });
  */
 /* dialog.showOpenDialog(win,{
  title: "Selecione um novo arquivo",
  buttonLabel: 'Enviar'
 }); */
 /* dialog.showErrorBox('Title Error', 'Content'); */
/*  dialog.showSaveDialog(win, {
   title:'Save dialog',
   buttonLabel: 'Save Here'
 }); */

/*  const menu = new Menu();
 menu.append(new MenuItem({
   label:'Menu 1'
 }));
 menu.append(new MenuItem({
   label: "Menu 2"
 })); */
});


