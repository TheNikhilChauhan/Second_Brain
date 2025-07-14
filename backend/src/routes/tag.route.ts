import express from "express";
import { TagsCreate } from "../controllers/tags.controller";
import authMiddleware from "../middlewares/user.middleware";
import { validate } from "../middlewares/zodValidate";
import { tagSchema } from "../validations/tags.validation";

const tagRoute = express.Router();

tagRoute.post("/createTag", authMiddleware, validate(tagSchema), TagsCreate);

export default tagRoute;
