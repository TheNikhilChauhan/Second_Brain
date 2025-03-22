import express from "express";
import userRouter from "./routes/route";
import { dbConnect } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

dbConnect();
app.use(express.json());

app.use("api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`The server is running at port: ${PORT}`);
});
