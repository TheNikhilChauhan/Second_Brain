import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
if (!process.env.MONGO_DB) {
  throw new Error(`Mongo DB env variable not set`);
}
const url: string = process.env.MONGO_DB;

const connectDB = async () => {
  try {
    const db = await mongoose.connect(url);
    console.log(`MONGODB connected: ${db.connection.name}`);
    return db;
  } catch (error) {
    console.error(`Mongo DB connection error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
