import express from "express";
import { TagsCreate } from "../controllers/tags.controller";
import authMiddleware from "../middlewares/user.middleware";

const tagRoute = express.Router();

tagRoute.post("/createTag", authMiddleware, TagsCreate);

export default tagRoute;
