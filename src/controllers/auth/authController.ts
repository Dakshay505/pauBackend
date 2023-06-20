import express ,{Request,Response,NextFunction} from "express";
import catchErrorAsync from "../../utils/catchErrorAsync";
import ErrorHandler from "../../middleware/ErrorHandler";
import Department from "../../database/models/DepartmentModel";
import { sendCookie } from "../../utils/sendCookie";
import bcrypt from "bcrypt";
// Register

export const register = catchErrorAsync(async (req: Request, resp: Response, next: NextFunction) => {
    const { departmentName, departmentEmail,departmentCode, password } = req.body;
  
    let department = await Department.findOne({ departmentName });
  
    if (department) return next(new ErrorHandler("department already exists", 400));
  
    const hashedPassword = await bcrypt.hash(password, 10);
    department = await Department.create({ departmentName, departmentEmail,departmentCode, password: hashedPassword });
  
    sendCookie(resp, department, "department user created successfully.", 201);
  });
  
  // Login
  export const login = catchErrorAsync(async (req: Request, resp: Response, next: NextFunction) => {
    const { departmentName, password } = req.body;
  
    let department = await Department.findOne({ departmentName }).select("+password");
  
    if (!department) return next(new ErrorHandler("department doesn't exist.", 404));
  
    const comparePassword = await bcrypt.compare(password, department.password);
    if (!comparePassword)
      return next(new ErrorHandler("department or password doesn't match.", 400));
  
    sendCookie(resp, department, `Welcome back, ${department.departmentName}`, 200);
  });
  