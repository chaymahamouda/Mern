const express = require("express");
const cors = require("cors");
const app=express();
const DbConnect = require("./DB_connect");

DbConnect();
app.use(express.json());
app.use(cors());

app.use("/game", require("./routes/gameRouter"));
app.listen(5000,(err) => {
    err ? console.log(err) : console.log("serveur is running")});
