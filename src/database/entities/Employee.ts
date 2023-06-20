import Config from "./misc/config";
import mongoose from "mongoose";

export interface employeeDocument extends Config{
    depId : mongoose.Schema.Types.ObjectId,
    designationId :mongoose.Schema.Types.ObjectId,
    fundAccountNumberId :mongoose.Schema.Types.ObjectId, // type and amount
    name : string,
    dateOfBirth: Date,
    dateOfJoining: Date,
    createdAt:Date,
    updatedAt:Date,
}