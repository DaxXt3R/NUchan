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

// ---------------------------  ---------------------------

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/initSidebar", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:1001/4chan/boards.json");
    res.json(response.data);
  } catch (error) {
    console.error(
      " ---------ERROR GETTING 4CHAN DATA FROM PROXY---------",
      error,
    );
  }
});
// axios.get('http://localhost:1001/boards')

const boardsRouter=require('./routes/boards.js')
app.use('/boards',boardsRouter)

app.get("/hot", (req, res) => {
  res.render("hot.ejs");
});
app.get("/settings", (req, res) => {
  res.render("settings.ejs");
});

app.get("/boards/:id", (req, res) => {
  res.send();
});
