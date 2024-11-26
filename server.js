const express = require("express"); //load express from npm
const app = express(); //create instance of express

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public"))); //serve public directory

// --------------------------- BROWSER SYNC ---------------------------
const browserSync = require("browser-sync").create();
app.listen(1001, () => {
  console.log("server listening on - http://localhost:1001/");
});
browserSync.init({
  proxy: "http://localhost:1001",
  // setup what files or folders should be watched **/* means watch a folder recursively
  files: ["views/**/*", "public/scripts"],
  port: 3000, //the port that browserSync uses
  open: false, //dont open a new tab
});

// --------------------------- FETCH DATA FROM 4CHAN THROUGH PROXY ---------------------------
const { createProxyMiddleware } = require("http-proxy-middleware");
const { default: axios } = require("axios");
const { log } = require("console");
app.use(
  "/4chan",
  createProxyMiddleware({
    target: "https://a.4cdn.org",
    changeOrigin: true,
    pathRewrite: {
      "^/4chan":
        "" /* this removes the /4chan prefix when forwarding to target */,
    },
  }),
);

// --------------------------- GET BOARD LIST FROM 4CHAN ---------------------------
const chalk = require('chalk');
var boardListJSON=[]
async function getBoardList() {
  try{
    boardListJSON = await axios.get("http://localhost:1001/4chan/boards.json");
    console.log(chalk.yellow("-----UPDATED BOARD LIST FROM 4CHAN API-----"))
    // console.log(boardListJSON.data)
  } catch (error) {
    console.error("-----COULDN'T GET 4CHAN BOARD LIST-----",error,)
  }  
}
getBoardList()
setInterval(getBoardList,60*60*1000)  /* 60 minutes * 60 seconds * 1000 miliseconds, 1second=1000miliseconds */
module.exports.getBoardListJSON= ()=>boardListJSON  //variables that get updated have to be exported like this, a function that returns the variable, otherwise if you just export the variable it will get exported once as the initial value and never again


// --------------------------- ROUTERS ---------------------------
const boardsRouter=require('./routes/boards.js')
app.use('/boards',boardsRouter)

app.get("/", (req, res) => {
  res.render('home.ejs', {boardList:boardListJSON.data})
});
app.get("/hot", (req, res) => {
  res.render("hot.ejs", {boardList:boardListJSON.data});
});
app.get("/settings", (req, res) => {
  res.render("settings.ejs", {boardList:boardListJSON.data});
});

app.get("/test", (req, res) => {
  res.render("test.ejs", {boardList:boardListJSON.data});
});
