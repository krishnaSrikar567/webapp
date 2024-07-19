const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/App')

const ownerScheme = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    
    picture:String,
    gstin:String
});

module.exports = mongoose.model('owner',ownerScheme);