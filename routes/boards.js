const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");


router.get('/',(req,res)=>{
    // res.send("viewing all boards")
})

router.get('/:boardName',async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/1.json`)
    res.render('board.ejs', {data:chanPage.data})
    console.log(chanPage.data)
})

module.exports = router;
