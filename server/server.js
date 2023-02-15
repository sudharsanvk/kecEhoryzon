const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const event = require('./models/eventModel')
const participant = require('./models/participantModel')


const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))


const connectDB=async()=>{await mongoose.connect('mongodb://localhost:27017/kecEhoryzon')}

connectDB().then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB not connected")
})

app.post("/admin/addEvent",async(req,res)=>{
    const eve = new event(req.body);
    eve.save();
    res.redirect('/')
})

app.get('/',async(req,res)=>{
    res.redirect('http://localhost:3000')
})

app.listen(2882,()=>{
    console.log('serving on port 2882')
})