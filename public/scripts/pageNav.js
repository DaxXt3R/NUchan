const xlPages=document.querySelector("#xlPages")

function initPageNav() {
    const aTags=xlPages.getElementsByTagName('a')

    let counter=0;
    for (const i of aTags){
        counter++;
        i.href=`/boards/${currentBoard.board}/${counter}`
        i.classList.remove("btn-active")
        if(i.href===window.location.href){i.classList.add("btn-active"); i.removeAttribute("href");}
    }
    if (window.location.pathname==`/boards/${currentBoard.board}`) {xlPages.firstElementChild.classList.add("btn-active")}
}
initPageNav()

const next=document.querySelector("#xlPageNavNext")
const prev=document.querySelector("#xlPageNavPrevious")

const currentLocation=Number(window.location.href.charAt(window.location.href.length-1))!==0?
     Number(window.location.href.charAt(window.location.href.length-1)): 10;
if (currentLocation<10){next.href=`/boards/${currentBoard.board}/${currentLocation+1}`};
if (currentLocation>1) {prev.href=`/boards/${currentBoard.board}/${currentLocation-1}`};
