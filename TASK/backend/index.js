const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const yogaRouter = require("./routes/yoga.router");

const app = express();

mongoose.set('strictQuery', true);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/yoga", yogaRouter);

app.get("/", (req,res)=> {
    return res.send("all ok");
})

mongoose.connect("mongodb+srv://vmr:vmr@cluster0.64xzncc.mongodb.net/yoga").then(()=>{
    app.listen(8080, ()=> {
        console.log("listening at http://localhost:8080");
    })
})
