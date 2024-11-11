const express=require("express");   //load express from npm
const app=express();    //create instance of express

const path=require("path")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public"))) //serve public directory




app.listen(3000, ()=>{
    console.log("http://localhost:3000/")
})

app.get('/', (req,res)=>{
    res.render('index.ejs')
})