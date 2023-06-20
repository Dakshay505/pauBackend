import jwt, { Secret } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { departmentDocument } from "../database/entities/Department";

export const sendCookie = (
  resp: Response,
  department: departmentDocument,
  message: string,
  statusCode = 200
): Response => {
  const token = jwt.sign({ department }, process.env.JWT_KEY as Secret);
  return resp
    .status(statusCode)
    .cookie("token", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    })
    .json({
      success: true,
      department,
      message,
    });
};