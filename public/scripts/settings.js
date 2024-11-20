import { toggleDarkMode } from "./globalSettings.js"    // DO NOT FORGET THE .JS FILE EXTENSION IT WONT WORK WITH MODULES OTHERWISE
import { toggleColorTheme } from "./globalSettings.js"

document.getElementById("darkModeBtn").addEventListener("change", ()=>{ toggleDarkMode() })
document.getElementById("themeSelector").addEventListener("change", (event)=>{ toggleColorTheme(event.target.value) })



