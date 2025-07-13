import express from "express";
import authMiddleware from "../middlewares/user.middleware";
import {
  displayContent,
  createContent,
} from "../controllers/content.controller";

const contentRouter = express.Router();

contentRouter.post("/createContent", authMiddleware, createContent);
contentRouter.get("/getContent", authMiddleware, displayContent);

export default contentRouter;
