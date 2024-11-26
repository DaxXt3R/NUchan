console.log(chanPage)
console.log("current Board is ",currentBoard)



function initBoard(boardJSON) {     //populates the board with threads of the given JSON
    
}

function initThread(threadJSON) {   //makes one thread with data

}
function initReply(replyJSON) {     //makes one reply
    
}

function initReplies(threadJSON) {
    
}

fetch("https://picsum.photos/400/400").then(res=>res.blob()).then(blob=>handler(blob))
function handler(blob) {
    document.getElementById("4chanAd").src=URL.createObjectURL(blob)
}

