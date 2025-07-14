import express from "express";

import { loginUser, registerUser } from "../controllers/auth.controller";
import { validate } from "../middlewares/zodValidate";
import { loginSchema, registerSchema } from "../validations/auth.validation";

const router = express.Router();

router.post("/login", validate(loginSchema), loginUser);
router.post("/register", validate(registerSchema), registerUser);

export default router;
