import mongoose from "mongoose";
import Config from "./misc/config";


export interface LoanRequestDocument extends Config{
    employeeId:mongoose.Schema.Types.ObjectId,
    fundAccountNumber:number,
    loanAmount:number,
    fundType:string,
    isApproved:boolean,
    grossSalary:number,
    interstRate:number
}