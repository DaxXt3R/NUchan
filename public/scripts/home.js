const boardCategories={
    "Japanese Culture":["a",'c','w','m','cgl','cm','f','n','jp','vt'],
    "Video Games":['v','vg','vm','vmg','vp','vr','vrpg','vst'],
    "Interests":["co",'g','tv','k','o','an','tg','sp','xs','pw','sci','his','int','out','toy'],
    "Creative":['i','po','p','ck','lit','mu','fa','3','gd','diy','wsg','qst'],
    "Other":['biz','trv','fit','x','adv','lgbt','mlp','news','wsr','vip'],
    "Misc.":['b','r9k','pol','bant','soc','s4s'],
    "Adult":['s','hc','hm','h','e','u','d','y','t','hr','gif','aco','r'],
}

const boardsWindowList=document.getElementById("boardsWindowList")

function initBoardsWindowList() {
    for (const category of Object.keys(boardCategories)){
        const categoryDiv=document.createElement("div")
        categoryDiv.classList.add("flex", "w-fit", "flex-col", "text-md")
        boardsWindowList.append(categoryDiv)

        const title=document.createElement("h3")
        title.innerText=category
        title.classList.add("text-lg","font-bold", "underline")
        categoryDiv.append(title)

        for (let board of boardCategories[category]){
            const aTag=document.createElement("a")
            const boardObj=boardList.boards.find(i=>i.board===board)    //this is the obj from the boardListJSON
            aTag.innerText=boardObj.title
            aTag.classList.add("hover:text-theme-textAccent", "hover:underline")
            aTag.href="/boards/"+boardObj.board
            categoryDiv.append(aTag)
        }
    }
}
initBoardsWindowList()

