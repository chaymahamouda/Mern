const mongoose = require("mongoose");


const gameShema = new mongoose.Schema({
    name: String,
    image: String,
    rate: {type:Number,default:0},
    category: String,
    release_date: String,
});
const Game=mongoose.model("game",gameShema);
module.exports = Game;