import mongoose from "mongoose";
import AuthoRoles from "../utils/authRoles.js";

const userSchema = new mongoose.Schema(
    {
name:{
    type:String,
    required:["true","name is required"],
    maxLength:[50,"name must be less then 50 char"]
},
 email:{
    type:String,
    required:["true","eamil is required"],
    
 },
 password:{
    type:String,
    required:[true,"password is required"],
    minLength:[8,"password must be at least 8 chars"],
    select:false
 },
 role:{
    type:String,
    enum: Object.values(AuthoRoles),
    default:AuthoRoles.USER
 },
 forgotPasswordTOken:String,
 forgotPasswordExpiry:Date   
},{timestamps:true})




export default mongoose.model("User",userSchema)