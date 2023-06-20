import mongoose from "mongoose";
export const employeeSchema = new mongoose.Schema({
    depId: {
        type: mongoose.Schema.Types.ObjectId
    },
    designationId: { 
        type: mongoose.Schema.Types.ObjectId
     },
    fundAccountNumberId: {
         type: mongoose.Schema.Types.ObjectId
        },
    name: { 
        type: String 
    },
    email:{
        type:String
    },
    dateOfBirth: {
         type: Date
         },
    dateOfJoining: {
         type: Date 
        },
}, {
    timestamps: true
})