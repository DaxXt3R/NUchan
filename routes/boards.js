const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const chalk = require('chalk');

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
    let boardTopAd=await getTopAd()
    let boardAd=await getBoardAd()
    
    
    let pageImages=await getPageImages(chanPage.data)


    res.render('board.ejs', {
        chanPage:chanPage.data,
        boardList:boardListJSON.data,
        currentBoard:currentBoard,
        boardTopAd, boardAd, pageImages,
    })
})


async function getPageImages(pageJSON) {
  const postsArr = pageJSON.threads[0].posts;
  let pageImages = {};

  const fetchPromises = postsArr.map(async (element) => {
    if (element.tim) {
      const postImg = await getImage(`http://i.4cdn.org/biz/${element.tim}s${element.ext}`,"/img/postImgDefault2.webp");
      pageImages[element.tim] = postImg;
    }
  });
  await Promise.all(fetchPromises);
  return pageImages;
}




async function getImage(imageURL, defaultURL="/img/postImgDefault.webp") { //gets the image from the specified URL and returns it as a URL string that can be sent to the client
    try {
        const response=await axios.get(imageURL, {responseType:"arraybuffer"});
        const imageBuffer = Buffer.from(response.data, 'binary').toString('base64');
        const url= `data:${response.headers['content-type']};base64,${imageBuffer}`;
        // console.log(url)
        return url
    } catch (err){
        console.error(chalk.red(`----Couldn't get image from ${imageURL}----`))
        return defaultURL
    }
}

async function getTopAd() {     //gets the topAd from 4chan
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
    const ad=await getImage(`https://s.4cdn.org/image/title/${randomImage()}`)
    return ad
}

const {boardAds}=require("../boardAdsList.js")
async function getBoardAd() {
    const boards=Object.keys(boardAds)
    const randomBoard= boards[Math.floor(Math.random()*boards.length)]
    const img=await getImage(boardAds[randomBoard])
    return [randomBoard, img]
    // console.log(boardAd)
}

router.get("/:boardName/:page", async(req,res)=>{
    const chanPage=await axios.get(`https://a.4cdn.org/${req.params.boardName}/${req.params.page}.json`)
    const boardListJSON=await getBoardListJSON();
    const currentBoard=boardListJSON.data.boards.find(i=>i.board===req.params.boardName)
    let boardTopAd=await getTopAd()
    
    
    res.render('board.ejs', {
        chanPage:chanPage.data,
        boardList:boardListJSON.data,
        currentBoard:currentBoard,
        boardTopAd,
    })
})


module.exports = router;


