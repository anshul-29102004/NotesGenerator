import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Testing MongoDB connection...");
console.log("URI:", process.env.MONGODB_URI.replace(/:[^:]*@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
})
.then(() => {
    console.log("✅ Database connected successfully!");
    process.exit(0);
})
.catch((error) => {
    console.error("❌ Connection failed!");
    console.error("Error:", error.message);
    console.error("\nFull error:", error);
    console.error("\n🔍 Troubleshooting steps:");
    console.error("1. Check if your IP is whitelisted in MongoDB Atlas (Network Access)");
    console.error("2. Verify username and password in Database Access");
    console.error("3. Ensure cluster is active and running");
    process.exit(1);
});
