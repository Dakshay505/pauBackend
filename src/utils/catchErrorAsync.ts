import {Request,Response,NextFunction} from "express"
let catchErrorAsync = (func:()=>{}) => (req:Request,resp:Response,next:NextFunction)=>{

    Promise.resolve(func(req,resp,next)).catch(next);
}   

export default catchErrorAsync;