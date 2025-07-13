import express from "express";
import authMiddleware from "../middlewares/user.middleware";
import { loginUser, registerUser } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
