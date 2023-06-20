import mongoose from "mongoose";
import {designationDocument} from "../entities/Designation"
import { designationSchema } from "../schemas/DesignationSchema";

const DesignationModel = mongoose.model<designationDocument>("Designation",designationSchema);
export default DesignationModel;