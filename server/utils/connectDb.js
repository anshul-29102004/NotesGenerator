import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1);
    }
}

export default connectDb;

