// axios.get("/boards").then(res=>{console.log(res.data)})
// const boardsList=axios.get("/boards")

async function initializeSidebar() {
  console.log(boardList);
  for (let i of boardList.boards) {
    // create the anchor tag container for everything
    const aTag = document.createElement("a");
    aTag.classList.add("sidebar-button");
    // add board letter
    const boardLetter = document.createElement("h4");
    boardLetter.innerHTML = "/" + i.board + "/";
    aTag.append(boardLetter);
    // add board full name
    const boardName = document.createElement("h4");
    boardName.innerHTML = "- "+i.title;
    boardName.classList.add("truncate", "flex-grow", 'pl-2');
    aTag.append(boardName);
    // add pin icon
    const pinIcon = document.createElement("img");
    pinIcon.classList.add("pinIcon");
    pinIcon.src = "/img/pin.svg";
    aTag.append(pinIcon);
    pinIcon.addEventListener("click", function () {
      pinIcon.parentElement.classList.toggle("pinned");
      pinIcon.classList.toggle("pinned");
      e.stopPropagation();
      e.preventDefault();
    });
    // add href
    aTag.href="/boards/"+i.board

    document.getElementById("boardContainer").append(aTag);
  }
}
initializeSidebar();
