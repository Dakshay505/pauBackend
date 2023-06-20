import mongoose from "mongoose";
import {departmentDocument} from "../entities/Department"
import { departmentSchema } from "../schemas/DepartmentSchema";

const DepartmentModel = mongoose.model<departmentDocument>("Department",departmentSchema);
export default DepartmentModel;