import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import authRoutes from "./routes/user.route";
import contentRoutes from "./routes/content.route";
import tagRoute from "./routes/tag.route";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use("/api/v1", authRoutes, contentRoutes, tagRoute);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`DB is connected to port: ${PORT}`);
});
