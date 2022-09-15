const express = require("express");
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use( require("./routes/auth"))


const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter)

mongoose.connect("mongodb+srv://hackx:hackx@cluster0.tfj5xx2.mongodb.net/?retryWrites=true&w=majority" , {useNewUrlParser:true})
.then(()=>console.log("mongodb connected successfully"))
.catch((err)=>console.log("mongodb connection error"))


const PORT =  8000;

app.listen(PORT, ()=>console.log("mongodb listening on port 8000"));
