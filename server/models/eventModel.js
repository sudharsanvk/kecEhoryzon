const mongoose = require('mongoose')
const schema = mongoose.Schema;

const eventSchema = schema({
    name:String,
    logo:String,
    venue:String,
    staff:String,
    student:String,
    staffContact:String,
    studentContact:String,
    noOfSeats:String,
    lastDateofRegistration:String,
    eligibility:String,
    amount:String,
    sDate:String,
    eDate:String
})

module.exports = mongoose.model('events',eventSchema)