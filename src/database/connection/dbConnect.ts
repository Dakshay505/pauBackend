import mongoose from "mongoose";

export const connection = async () => {
        try{
                const connect = await mongoose.connect(`${process.env.MONGO_URI}`);
                console.log("DB connected");
                return connect;
        }catch(err: any){
                console.log(err.message)
        }
}