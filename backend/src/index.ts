import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`DB is connected to port: ${PORT}`);
});
