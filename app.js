import express  from "express";
const app = express();
import play from "./routes/play.js"

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.use(express.json())
app.use(play);

app.get("/",(req,res)=>{
    res.json({"data":"hello"})
})


app.listen(80,()=>{
    console.log("server is working");
})
