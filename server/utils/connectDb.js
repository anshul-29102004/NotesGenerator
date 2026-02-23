import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDb;

