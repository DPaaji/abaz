import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3002;
const server = express();

server.use(express.json());
server.use("/api/users", userRoute);
server.use("/api/category", categoryRoute);

connectDB();
server.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})
