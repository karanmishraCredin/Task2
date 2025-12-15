import mongoose from "mongoose";
import dotenv from 'dotenv'
async function connectdb() {
    dotenv.config();
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB:" + error);
    }
}
export default connectdb