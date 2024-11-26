const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");

const {getBoardListJSON}=require('../server')    //server.js gets the boardList JSON every hour, to not send too many requests and saves it in boardListJSON, this is imported here so you can send it with the HTML template, to render the sideBar

router.get('/',(req,res)=>{
    // res.send("viewing all boards")
})

router.get('/:boardName',async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/1.json`)
    //send the saved boardList that gets updated every hour from server
    const boardListJSON=await getBoardListJSON();
    //send the current board array from the boardlist JSON
    const currentBoard=boardListJSON.data.boards.find(i=>i.board===req.params.boardName)
    //get the image at the top of the page, the 4chan Ad
    let randomImage=()=>{
        const randomNumber=Math.floor(Math.random()*200)+1;
        const randomType=Math.floor(Math.random()*2);
        if (randomType===0){
            return `${randomNumber}.jpg`
        } else {
            return `${randomNumber}.gif`
        }
    }
    // console.log("randomImage is =",randomImage())
    const topAd=await axios.get(`https://s.4cdn.org/image/title/200.jpg`,{responseType:"blob"})
    
    
    res.render('board.ejs', {
        chanPage:chanPage.data,
        boardList:boardListJSON.data,
        currentBoard:currentBoard,
        // topAd:topAd
    })
})

router.get("/:boardName/:page", async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/${req.params.page}.json`)
    const boardListJSON=await getBoardListJSON();

    const currentBoard=boardListJSON.data.boards.find(i=>i.board===req.params.boardName)
    res.render('board.ejs', {chanPage:chanPage.data, boardList:boardListJSON.data, currentBoard:currentBoard})
})


module.exports = router;


