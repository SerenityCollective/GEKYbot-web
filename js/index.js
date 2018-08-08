 const alert = alert("Website is currently undergoing heavy development, while commands are visible they do not look as we intend");

const commands = require("../html/index.js");

 const headName = document.getElementByClass(".head");
    
   if(headName === "GEKYbot") {
     
     return alert;
     
        else{
      window.open("https://google.com/");
     }
     
   }

var commands = document.getElementByClass(".cmds");
  if(commands.context > 0) return alert("Error loading commands.");
    var fatal_error_loading = alert("A fatal error has been encountered while loading the application, please reload, if issue persists report an issue on our github");
if(commands === null) return fatal_error_loading;
