import mongoose from "mongoose";

export const designationSchema = new mongoose.Schema({
   designationCode:{
    type:String,
   },
   designationName:{
    type:String
   },  
})