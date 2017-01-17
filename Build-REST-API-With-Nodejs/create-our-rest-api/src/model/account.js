import mongoose from 'mongoose'
const Schema = mongoos.Schema
import passportLocalMongoose from 'passport-local-mongoose'

let Account = new Schema({
    email: {
        type:String,
        requried:true
    },
    password: {
        type:String,
        required: true
    }
})

Account.plugin(passprotLocalMongoose)
modul.exports = mongoose.model('Account', Account)