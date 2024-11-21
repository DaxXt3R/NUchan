import { toggleDarkMode } from "./globalSettings.js"    // DO NOT FORGET THE .JS FILE EXTENSION IT WONT WORK WITH MODULES OTHERWISE
import { toggleColorTheme } from "./globalSettings.js"


const darkModeBtn=document.getElementById("darkModeBtn")
if (localStorage.getItem("darkMode")==="true") {darkModeBtn.checked=true}
darkModeBtn.addEventListener("change", ()=>{ toggleDarkMode() })

const themeSelector=document.getElementById("themeSelector")
for (let i=0; i< themeSelector.options.length; i++) {
    if ( themeSelector.options[i].value===localStorage.getItem("colorTheme") ) {
        themeSelector.options[i].selected=true
        break;
    }
}
themeSelector.addEventListener("change", (event)=>{ toggleColorTheme(event.target.value) })



