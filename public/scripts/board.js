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

    thread.querySelector("#threadTitle").href=window.location.origin+`/boards/${currentBoard.board}`+`/thread/${chanPage.threads[threadLinkCounter].posts[0].no}`
    threadLinkCounter++     //DO NOT move this line by itself, move it and the upper one together
})

