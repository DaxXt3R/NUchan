const express=require("express");   //load express from npm
const app=express();    //create instance of express

const path=require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public"))) //serve public directory

// --------------------------- BROWSER SYNC ---------------------------
const browserSync = require('browser-sync').create();
app.listen(1001, ()=>{
    console.log("server listening on - http://localhost:1001/")
})
browserSync.init({
    proxy: "http://localhost:1001",
    // setup what files or folders should be watched **/* means watch a folder recursively
    files: ["views/**/*", "public/scripts"],
    port: 3000, //the port that browserSync uses
    open: false //dont open a new tab
})



// ---------------------------  ---------------------------

app.get('/', (req,res)=>{
    res.render('home.ejs')
})