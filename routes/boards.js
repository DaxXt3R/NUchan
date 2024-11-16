const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    // res.send("viewing all boards")
})

router.get('/:boardName',(req,res)=>{
    // res.send(`viewing /${req.params.boardName}/`)
    const boardsJSON={message:"this is some data from the boards JSON"}

    res.render('board.ejs', {data:boardsJSON})
})



module.exports = router;
