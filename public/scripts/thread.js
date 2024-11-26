const expandButton=document.getElementById("expandButton")
expandButton.addEventListener("click", expandThread)

const topContainer=document.getElementById("topContainer")
function expandThread(){
    topContainer.classList.toggle("threadCollapsed")
    expandButton.querySelector("span").innerHTML= expandButton.querySelector("span").innerHTML==="add"? "remove":"add"
}