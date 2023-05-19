import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email: {
        type: String,
        required: true,
        trim:true,
    },
    phoneno:{type:String},
    dob:{type:String},
    profileImg:{type:String},
    isActive:{type:Boolean,default:true}
},
{
    timestamps:true,
}
)

const usermodel=mongoose.model('users',userSchema)
export default usermodel