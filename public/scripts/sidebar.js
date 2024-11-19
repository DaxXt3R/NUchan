/* READY */
document.addEventListener("DOMContentLoaded", function () {
  updateSideBar();
})

let sidebarCollapsed=localStorage.getItem("sidebarCollapsed")==="true"

document.getElementById('expandSide').addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("sidebarCollapsed")
  document.getElementById("gridContainer").classList.toggle("sidebarCollapsed")
  let currentState=localStorage.getItem("sidebarCollapsed")==="true" //this retarded function returns a string, so we check if it is "true" to turn it into a boolean check
  localStorage.setItem("sidebarCollapsed", !currentState)
  sidebarCollapsed=currentState
})

function updateSideBar() {
  let currentState=localStorage.getItem("sidebarCollapsed")==="true" //this retarded function returns a string, so we check if it is "true" to turn it into a boolean check
  let sidebar=document.getElementById("sidebar")
  let grid=document.getElementById("gridContainer")

  if (sidebarCollapsed){
    sidebar.classList.add("sidebarCollapsed")
    grid.classList.add("sidebarCollapsed")
  } else {
    sidebar.classList.remove("sidebarCollapsed")
    grid.classList.remove("sidebarCollapsed")
  }
}


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
    const boardName = document.createElement("h6");
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

