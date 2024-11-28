let expandButton=document.getElementById("expandButton")
expandButton.addEventListener("click", expandThread)

const topContainer=document.getElementById("topContainer")
function expandThread(){
    topContainer.classList.toggle("threadCollapsed")
}

console.log("thread collapsed")

const comment=document.getElementById("threadComment")
if (comment.textContent=""){comment.classList.add("hide")}