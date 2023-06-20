import mongoose from "mongoose";
import {employeeDocument} from "../entities/Employee"
import {employeeSchema} from "../schemas/EmployeeSchema";

const employeeModel = mongoose.model<employeeDocument>("Employee",employeeSchema);
export default employeeModel;