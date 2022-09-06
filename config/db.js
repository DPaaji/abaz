
import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB =() => {

    try{
        dotenv.config();
        
        mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology:true,
            useNewUrlParser: true,
        });
        console.log('Database Connected...')
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

export default connectDB;