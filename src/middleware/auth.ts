import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { departmentDocument } from "../database/entities/Department";
import Department from "../database/models/DepartmentModel";

interface AuthenticatedRequest extends Request {
  department?: departmentDocument;
}

export const isAuthenticated = async (
  req: AuthenticatedRequest,
  resp: Response,
  next: NextFunction
): Promise<void | Response> => {
  const { token } = req.cookies;

  if (!token) {
    return resp.status(404).json({
      success: false,
      message: "Login first.",
    });
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_KEY as Secret) as { department: { _id: string } };
    const department: departmentDocument | null = await Department.findById(decodedData.department._id);
    req.department = department as departmentDocument;

    next();
  } catch (error) {
    return resp.status(401).json({
      success: false,
      message: "Invalid token.",
    });
  }
};
