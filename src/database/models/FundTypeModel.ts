import mongoose from "mongoose";
import {fundTypeDocument} from "../entities/Fundtype"
import { fundTypeSchema } from "../schemas/FundTypeSchema";

const fundTypeModel = mongoose.model<fundTypeDocument>("FundType",fundTypeSchema);
export default fundTypeModel;
