xlPages=document.querySelector("#xlPages")
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