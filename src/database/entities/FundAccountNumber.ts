import mongoose from "mongoose";
import Config from "./misc/config";

export interface fundAccountNumberDocument extends Config{
     fundType:mongoose.Schema.Types.ObjectId,
     amount:number
}