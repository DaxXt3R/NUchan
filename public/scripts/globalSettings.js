
if (!localStorage.getItem("darkMode")){localStorage.setItem("darkMode", "false")}   //on first page load add the variable darkMode
if (!localStorage.getItem("colorTheme")){localStorage.setItem("colorTheme", "red")}   //on first page load add the variable darkMode
let isDarkMode=localStorage.getItem("darkMode")
let colorTheme=localStorage.getItem("colorTheme")
const grid=document.getElementById("gridContainer")

console.log(isDarkMode,colorTheme)
initDarkMode()
function initDarkMode() {
    grid.classList.remove("theme-red", "theme-blue", "theme-red-dark", "theme-blue-dark")
    if (isDarkMode==="true"){ 
        grid.classList.add("theme-blue-dark")
    } else{
        grid.classList.add("theme-blue")
    }
}

export function toggleDarkMode() {
    //load current mode from localStorage
    isDarkMode=localStorage.getItem("darkMode")
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
                console.log("red theme")
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
    // console.log(theme)
    switch (theme){
        case "auto":

            break;
        
        case "red":

            break;
        
        case "blue":
            break;

    }
}