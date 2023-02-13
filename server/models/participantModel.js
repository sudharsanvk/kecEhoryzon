const mongoose = require('mongoose')
const schema = mongoose.Schema;

const participantSchema = schema({
    name:String,
    profile:String,
    college:String,
    mail:String,
    Contact:String,
    noOfSeats:String,
    lastDateRegistration:String,
    eventsAttended:String,
    eventsRegistered:String,
    registrationPending:String
})

module.exports = mongoose.model('participants',participantSchema)