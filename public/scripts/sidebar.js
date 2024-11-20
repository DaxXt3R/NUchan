/* READY */
document.addEventListener("DOMContentLoaded", function () {
  updateSideBar();
  updateBoardlist()
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


let userBoardlist=JSON.parse(localStorage.getItem("userBoardlist")) || [];
// set boardList on first page load
if (!localStorage.getItem("userBoardlist")){localStorage.setItem("userBoardlist", JSON.stringify([]))}
function updateBoardlist(){
  document.getElementById("boardContainer").innerHTML=""; //we're rebuilding the list on every click

  // ---------------- PINNED BOARDS  ----------------
  for (let i of userBoardlist){
    const boardContainer=document.createElement("li")
    boardContainer.classList.add("flex", "pinned");
    
    const aTag = document.createElement("a");
    aTag.classList.add("sidebar-button");
    
    const boardLetter = document.createElement("h4");
    boardLetter.innerHTML = "/" + i.board + "/";
    aTag.append(boardLetter)
    boardContainer.append(aTag)
    
    const boardName = document.createElement("h6");
    boardName.innerHTML = "- "+i.title;
    boardName.classList.add("truncate", "grow", 'pl-2');
    aTag.append(boardName)
    
    // pin icon
    const pinIcon = document.createElement("img");
    pinIcon.classList.add("pinIcon", "pinned", "cursor-pointer");
    pinIcon.src = "/img/pinRed.svg";
    boardContainer.append(pinIcon);
    pinIcon.addEventListener("click", ()=>{
      pinBoard(pinIcon)
      userBoardlist=userBoardlist.filter(obj=>obj!==i)
      localStorage.setItem("userBoardlist", JSON.stringify(userBoardlist))
      if (!boardList.boards.includes(i)){boardList.boards.push(i)}
      updateBoardlist()
    })
    document.getElementById("boardContainer").append(boardContainer);
    aTag.href="/boards/"+i.board

  }
  
  // ---------------- LEFTOVER BOARDS ----------------
  for (let i of boardList.boards) {

    const li=document.createElement("li")
    li.classList.add("flex");
    
    const aTag = document.createElement("a");
    aTag.classList.add("sidebar-button");
    
    const boardLetter = document.createElement("h4");
    boardLetter.innerHTML = "/" + i.board + "/";
    aTag.append(boardLetter);
    li.append(aTag)
    
    const boardName = document.createElement("h6");     // add board full name
    boardName.innerHTML = "- "+i.title;
    boardName.classList.add("truncate", "grow", 'pl-2');
    aTag.append(boardName);
       
    // pin icon
    const pinIcon = document.createElement("img");
    pinIcon.classList.add("pinIcon","cursor-pointer");
    pinIcon.src = "/img/pin.svg";
    li.append(pinIcon);
    // pin icon funtionality
    pinIcon.addEventListener("click", ()=>{
      pinBoard(pinIcon)
      // if clicked board is in userBoardlist, remove it and if it is not there add it
      boardList.boards=boardList.boards.filter(obj=>obj!==i)
      userBoardlist.push(i)
      localStorage.setItem("userBoardlist", JSON.stringify(userBoardlist))
      updateBoardlist()
    })
    // add href
    aTag.href="/boards/"+i.board
    document.getElementById("boardContainer").append(li);
  }
  
  // console.log("userBoard =",userBoardlist)
  // console.log("boardList =",boardList.boards)
}


function pinBoard(obj){
  obj.parentElement.classList.toggle("pinned");
  obj.classList.toggle("pinned");
}



