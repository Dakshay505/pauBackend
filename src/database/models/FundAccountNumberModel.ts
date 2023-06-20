import mongoose from "mongoose";
import {fundAccountNumberDocument} from "../entities/FundAccountNumber"
import { fundAccountNumberSchema } from "../schemas/FundAccountNumberSchema";

const fundAccountNumberModel = mongoose.model<fundAccountNumberDocument>("FundAccountNumber",fundAccountNumberSchema);
export default fundAccountNumberModel;
