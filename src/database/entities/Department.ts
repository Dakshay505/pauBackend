import Config from "./misc/config";

export interface departmentDocument extends Config{
   departmentCode:string,
   departmentName:string,
   departmentEmail:string,
   password:string
   createdAt:Date,
   updatedAt:Date,
}