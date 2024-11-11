const express=require("express");   //load express from npm
const app=express();    //create instance of express

const path=require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public"))) //serve public directory

const browserSync = require('browser-sync').create();
browserSync.init({
    proxy: "http://localhost:1001",
    // setup what files or folders should be watched **/* means watch a folder recursively
    files: ["views/**/*"],
    port: 3000,
    open: false
})

app.listen(1001, ()=>{
    console.log("http://localhost:1001/")
})

app.get('/', (req,res)=>{
    res.render('index.ejs')
    console.log("")
})