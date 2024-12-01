console.log("chanPage =",chanPage)
console.log("currentBoard =",currentBoard)

const threads=document.querySelectorAll("#threadContainer")

let threadLinkCounter=0     //this is a pretty stupid way to add links to the threads but fuck it
threads.forEach(thread=>{
    const collapseButton=thread.querySelector("#collapseButton")
    const expandButton=thread.querySelector("#expandButton")

    collapseButton.addEventListener("click", function() {
        thread.querySelector("#threadExpanded").classList.add("hidden")
        thread.querySelector("#threadCollapsed").classList.remove("hidden")
    })
    expandButton.addEventListener("click", function() {
        thread.querySelector("#threadExpanded").classList.remove("hidden")
        thread.querySelector("#threadCollapsed").classList.add("hidden")
    })

    thread.querySelector("#threadTitle").href=window.location.pathname+`/thread/${chanPage.threads[threadLinkCounter].posts[0].no}`
    threadLinkCounter++     //DO NOT move this line by itself, move it and the upper one together
})



// function initPageNav() {

// }

// const xlPages=document.querySelectorAll("xlPages")

// for (const container of xlPages){
//     const numberButton=document.createElement("a")
    
//     container.append(numberButton)
//     if (window.location.pathname==`/boards/${currentBoard.board}`) {container.firstElementChild.classList.add("btn-active")}

// }

// "rounded-lg join-item btn btn-ghost"

function initNextPrev() {
    
}