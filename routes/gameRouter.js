const express = require ("express");
const gameRouter = express.Router();
const Game = require("../models/gameModel");

gameRouter.post("/add", async (req, res)=>{
try {
 
    const newGame =new Game(req.body);
    const result=await newGame.save();
    res.status(200).send({game:result,msg:"game added succsesfully "});  
} catch (error) {
    console.log(error);
    
}
});

gameRouter.get("/", async (req, res)=>{
    try {
     
        const result=await Game.find();
        res.status(200).send({games:result,msg:"all games "});  
    } catch (error) {
        console.log(error);
        
    }
    });

    gameRouter.get("/:id", async (req, res)=>{
        try {
         
            const result=await Game.findById({_id:req.params.id});
            res.status(200).send({game:result,msg:"searched game "});  
        } catch (error) {
            console.log(error);
            
        }
        });

        gameRouter.put("/:id", async (req, res)=>{
            try {
             
                const result=await Game.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body}});
                res.status(200).send({msg:"game updated "});  
            } catch (error) {
                console.log(error);
                
            }
            });

            
        gameRouter.delete("/:id", async (req, res)=>{
            try {
             
                const result=await Game.findByIdAndDelete({_id:req.params.id});
                res.status(200).send({msg:"game deleted "});  
            } catch (error) {
                console.log(error);
                
            }
            });




module.exports = gameRouter;

