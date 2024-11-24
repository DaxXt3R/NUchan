const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");

const {getBoardListJSON}=require('../server')    //server.js gets the boardList JSON every hour, to not send too many requests and saves it in boardListJSON, this is imported here so you can send it with the HTML template, to render the sideBar


router.get('/',(req,res)=>{
    // res.send("viewing all boards")
})

router.get('/:boardName',async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/1.json`)
    const boardListJSON=await getBoardListJSON();
    // console.log(boardListJSON.data)
    res.render('board.ejs', {data:chanPage.data, boardList:boardListJSON.data, currentBoard:req.params.boardName})
})

router.get("/:boardName/:page", async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/1.json`)

})


module.exports = router;


