import mongoose from "mongoose";

export const loanRequestSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId
    },
    fundAccountNumber: {
        type: Number
    },
    grossSalary:{
        type:Number
    },
    loanAmount: {
        type: Number
    }, fundType: {
        type: String
    },interstRate:{
       type:Number
    },isApproved: {
        type: Boolean
    }
})