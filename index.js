const mongoose = require('mongoose');
const express = require('express')
const app = express();
app.use(express.json())
const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/MYCAL?retryWrites=true&w=majority');

let Model ;
// let email =""

function CDS(collection) {
// email=collection;
let dm = mongoose.model(collection,mongoose.Schema({
    title:String,
    discription:String,
    startdate:String,
    enddate:String,
    starttime:String,
    endtime:String,
    email:String
}))


}


app.get("/",(req,res)=>{
    res.send("Api is working ")
})



app.post("/regis",(req,res)=>{
    let data= req.body;
//   if (email!=data.email){
    CDS(data.email)
  
res.send ({"msg":"User Collection Is Created "})

})






app.listen(8080,()=>{
    try {
        connection;
        console.log("DB connection success full")
    } catch (error) {
        console.log("Err from db connection ",error)
    }
    console.log("listning to port 8080")
})