const express = require("express");
const YogaModel = require("../model/yoga.model");

const app = express.Router();

app.get("/", async(req,res)=>{
    let users = await YogaModel.find();
    return res.status(200).send(users);
})

app.post("/", async(req,res)=> {
    try{
        let details = new YogaModel({...req.body});
        console.log(details)
        await details.save();
        return res.status(200).send(details);
    }catch(e){
        return res.status(404).send("something went wrong");
    }
})

module.exports = app;