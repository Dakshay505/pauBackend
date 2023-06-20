import mongoose from "mongoose";

export const fundAccountNumberSchema = new mongoose.Schema({  
  fundType:{
    type:mongoose.Schema.Types.ObjectId
  },
  amount:{
    type:Number
  }
})