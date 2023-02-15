const mongoose = require('mongoose')
const schema = mongoose.Schema;

const eventSchema = schema({
    name:String,
    logo:String,
    desc:String,
    venue:String,
    staff:String,
    student:String,
    staffContact:String,
    studentContact:String,
    noOfSeats:Number,
    lastDateofRegistration:String,
    eligibility:String,
    amount:String,
    sDate:String,
    eDate:String,
    website:String,
    booked:Number
})

module.exports = mongoose.model('events',eventSchema)