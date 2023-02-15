const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const event = require('./models/eventModel')
const participant = require('./models/participantModel')
const user = require('./models/userModel')
var passport = require('passport');
var localstrategy = require('passport-local');
// var user = require('./models/userModel');
var methodOverride = require('method-override');
var path = require('path');


var a = {"status":"success"}
var b = {"status":"failed"}
var c;
c=b;
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true})) 


const stripe = require('stripe')('sk_test_51MbbQNSIGeKLVLNO1jrWxhXrJkDPgekIu2IksOsVYqio57TSSCv4mccFv2i9wneBWQfjXRU6rjNWacuq1zHrJ7er00oP8iaIMh')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  res.redirect(303, session.url);
});















app.use(require("express-session")({
    secret:"secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
     httpOnly: true,
     expires: Date.now()+1000*60*60*24*7,
     maxAge: 1000*60*60*24*7
    }     
}));
 
app.use(passport.initialize());
app.use(passport.session());    

passport.use(new localstrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// var isLoggedIn=((req,res,next)=>{
//     if(!req.isAuthenticated())
//     {
//         req.flash('success','You must be signed in')
//         return res.redirect('http://localhost:3000/register')
//     }   

//     next();
// })

// app.get('/loggedin',(req,res)=>{
//     if(!req.isAuthenticated())
//     {
//         res.json({"status":"failed"})        
//     }   
    
//     else
//     {
//         console.log(req.user.username)
//         res.json(c)    
//     }
    
// })


app.get('/loggedin',(req,res)=>{
    res.json(c);
})


app.post('/login', passport.authenticate("local", 
{
    successRedirect: "http://localhost:3000/events" , 
    failureRedirect:"http://localhost:3000/cancel",
}), function(req,res){ 
    c=a;
 });


app.post('/register', function(req,res){
    var newUser = new user({username:req.body.username});
    user.register(newUser,req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("http://localhost:3000/register");
        }
        passport.authenticate("local")(req,res, function(){
                res.redirect("http://localhost:3000");
            });
       });
});


app.get('/logout', async(req, res, next) => {
    c=b;
    req.logout(function(err) {
      if (err) { return next(err); }
      else {res.redirect('http://localhost:3000') }
    });
  });  






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