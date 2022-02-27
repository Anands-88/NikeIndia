const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        password:{type:String, required:true},
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        dob:{type:Date,required:true},
        gender:{type:String}
    },
    {
        versionKey:false,
    }
)

const User = mongoose.model("user",userSchema);

module.exports = User;

