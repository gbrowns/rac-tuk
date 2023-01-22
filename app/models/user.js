const mongoose = require ('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        length:5
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        length:10
    },
    password:{
        type:String,
        required:true,
        length:10
    }
});

const user = mongoose.model("User",UserSchema);

module.exports = user;