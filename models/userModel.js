const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:''
    },
    // friends:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }],
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model('User',userSchema);

module.exports=User;