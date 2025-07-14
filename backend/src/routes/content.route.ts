import express from "express";
import authMiddleware from "../middlewares/user.middleware";
import {
  displayContent,
  createContent,
} from "../controllers/content.controller";
import { validate } from "../middlewares/zodValidate";
import { contentSchema } from "../validations/content.validation";

const contentRouter = express.Router();

contentRouter.post(
  "/createContent",
  authMiddleware,
  validate(contentSchema),
  createContent
);
contentRouter.get("/getContent", authMiddleware, displayContent);

export default contentRouter;
