import mongoose from "mongoose";
import { env } from "./env";


export const connectDB =async() =>{
    try{
        await mongoose.connect(env.mongodbUri);
        console.log('✅ MongoDB connected');
    }
    catch(error:any){
        console.log("❌ DB connection failed");
        process.exit(1);
    }
};