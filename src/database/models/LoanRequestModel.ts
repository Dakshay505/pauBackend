import mongoose from "mongoose";
import {LoanRequestDocument} from "../entities/LoanRequest"
import {loanRequestSchema} from "../schemas/LoanRequestSchema";

const loanRequestModel = mongoose.model<LoanRequestDocument>("LoanRequest",loanRequestSchema);
export default loanRequestModel;
