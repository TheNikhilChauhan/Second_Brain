import express from "express";
import userRouter from "./routes/route";

const app = express();
const PORT = 8010;

app.use(express.json());

app.use("api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`The server is running at port: ${PORT}`);
});
