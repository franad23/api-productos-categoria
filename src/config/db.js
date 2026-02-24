import mongoose from "mongoose";    
import { MONGO_URI } from "./env.js";

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('DB CONECTADA')
    } catch (error) {
        console.log('ERROR DB', error)
    }
};

export default connectDB;