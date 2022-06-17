// requires
const express = require("express");
const app = express();
const profRouter = require("./routes/profile");
const PORT = 3000;


// public,views
app.use(express.static("public"));
app.set("view engine", "ejs");

// gets
app.get("/", (req, res) => {
    res.render("index");
});

// routes
app.use("/profile", profRouter);

// listen
app.listen(PORT, ()=>{
    console.log("http://localhost:3000")
});