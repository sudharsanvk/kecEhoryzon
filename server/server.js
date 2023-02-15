const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const event = require('./models/eventModel')
const participant = require('./models/participantModel')
const user = require('./models/userModel')
// var passport = require('passport');
// var localstrategy = require('passport-local');
// // var user = require('./models/userModel');
// var methodOverride = require('method-override');
// var path = require('path');



const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true})) 

// app.use(require("express-session")({
//     secret:"secret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//      httpOnly: true,
//      expires: Date.now()+1000*60*60*24*7,
//      maxAge: 1000*60*60*24*7
//     }     
// }));
 
// app.use(passport.initialize());
// app.use(passport.session());    

// passport.use(new localstrategy(user.authenticate()));

// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());



// app.post('/', passport.authenticate("local", 
// {
//     successRedirect: "/home" , 
//     failureRedirect:"/",
// }), function(req,res){  });



// app.post('/register', function(req,res){
//     var newUser = new user({username:req.body.username});
//     user.register(newUser,req.body.password, function(err,user){
//         if(err){
//             console.log(err);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req,res, function(){
//                 res.redirect("http://localhost:3000");
//             });
//        });
// });

// app.get('/logout', catchasync(async(req, res, next) => {
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       else {res.redirect('/home') }
//     });
//   }));  

const connectDB=async()=>{await mongoose.connect('mongodb://127.0.0.1:27017/kecEhoryzon')}

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

app.get("/events",async(req,res)=>{
    console.log("first")
    const data = await event.find();
    console.log(data)
    res.json(data)
}) 


app.get("/events-overview/:id",async(req,res)=>{
    console.log(req.params.id)
    const eve = req.params.id;
    const data = await event.findById(eve);
    console.log(data)
    res.json(data)
})



app.get('/',async(req,res)=>{
    res.redirect('http://localhost:3000')
})

app.listen(2882,()=>{
    console.log('serving on port 2882')
})