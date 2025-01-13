
if (!localStorage.getItem("darkMode")){localStorage.setItem("darkMode", "false")}   //on first page load add the variable darkMode
if (!localStorage.getItem("colorTheme")){localStorage.setItem("colorTheme", "red")}   //on first page load add the variable darkMode
let isDarkMode=localStorage.getItem("darkMode")
let colorTheme=localStorage.getItem("colorTheme")
const grid=document.getElementById("gridContainer")

// console.log(isDarkMode,colorTheme)
initTheme()
function initTheme() {
    grid.classList.remove("theme-red", "theme-blue", "theme-red-dark", "theme-blue-dark")
    switch(colorTheme){
        case "auto":
            break;
        case "red":
            isDarkMode==="true"? grid.classList.add("theme-red-dark"):grid.classList.add("theme-red")
            break;
        case "blue":
            isDarkMode==="true"? grid.classList.add("theme-blue-dark"):grid.classList.add("theme-blue")

            break;
    }
}

export function toggleDarkMode() {
    //load current mode from localStorage
    isDarkMode=localStorage.getItem("darkMode")
    colorTheme=localStorage.getItem("colorTheme")

    grid.classList.remove("theme-red", "theme-blue", "theme-red-dark", "theme-blue-dark")   //remove the current theme

    if (isDarkMode==="false"){       //if it is currently not darkMode turn it on

        // --------------DARK MODE--------------
        localStorage.setItem("darkMode","true");
        switch(colorTheme){
            case "red":
                grid.classList.add("theme-red-dark")
                break;
            case "blue":
                grid.classList.add("theme-blue-dark")
                break;
        }
    } else{
        // --------------LIGHT MODE--------------
        localStorage.setItem("darkMode","false");
        switch(colorTheme){
            case "red":
                grid.classList.add("theme-red")
                break;
            case "blue":
                grid.classList.add("theme-blue")
                break;
        }

    }
    // document.getElementById("gridContainer").classList.replace()

}

export function toggleColorTheme(theme="red") {
    colorTheme=localStorage.getItem("colorTheme")
    isDarkMode=localStorage.getItem("darkMode")

    grid.classList.remove("theme-red", "theme-blue", "theme-red-dark", "theme-blue-dark")   //remove the current theme

    // console.log(theme)
    switch (theme){
        case "auto":

            break;
        
        case "red":
            localStorage.setItem("colorTheme","red");
            isDarkMode==="true" ? grid.classList.add("theme-red-dark"): grid.classList.add("theme-red")
            break;
            
        case "blue":
            localStorage.setItem("colorTheme","blue");
            isDarkMode==="true" ? grid.classList.add("theme-blue-dark"): grid.classList.add("theme-blue")
            break;

    }

}
