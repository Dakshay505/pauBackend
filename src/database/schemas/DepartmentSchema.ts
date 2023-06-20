import mongoose from "mongoose";

export const departmentSchema = new mongoose.Schema({
   departmentCode:{
    type:String,
   },
   departmentName:{
    type:String
   },
   departmentEmail:{
    type:String
   },
   password:{
    type:String,
    select:false
   }
}, {
    timestamps: true
})