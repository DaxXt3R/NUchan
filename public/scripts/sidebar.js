// axios.get("/boards").then(res=>{console.log(res.data)})
// const boardsList=axios.get("/boards")

async function initializeSidebar() {
  const response = await axios.get("/boards");
  const boardList = response.data;
  console.log(boardList);
  for (let i of boardList.boards) {
    // create the anchor tag container for everything
    const aTag = document.createElement("a");
    aTag.classList.add("sidebar-button");
    // add board letter
    const boardLetter = document.createElement("span");
    boardLetter.innerHTML = "/" + i.board + "/";
    aTag.append(boardLetter);
    // add board full name
    const boardName = document.createElement("span");
    boardName.innerHTML = i.title;
    boardName.classList.add("truncate", "flex-grow");
    aTag.append(boardName);
    // add pin icon
    const pinIcon = document.createElement("img");
    pinIcon.classList.add("pinIcon");
    pinIcon.src = "/img/pin.svg";
    aTag.append(pinIcon);
    pinIcon.addEventListener("click", function () {
      pinIcon.parentElement.classList.toggle("pinned");
      pinIcon.classList.toggle("pinned");
    });
    // add href
    aTag.href="/boards/"+i.board

    document.getElementById("boardContainer").append(aTag);
  }
}
initializeSidebar();
