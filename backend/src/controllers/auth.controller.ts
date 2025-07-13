import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  //find user
  const user = await UserModel.findOne({ email });

  //if not user
  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.status(200).json({ token });
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(402).json({
      message: "Please fill all the required fields",
    });
  }

  const exists = await UserModel.findOne({ email });
  if (exists) {
    return res.status(409).json({
      message: "Email already in use",
    });
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await UserModel.create({
    email,
    password: hashed,
    username,
  });

  res.status(201).json({
    message: "User registered",
    user: newUser,
  });
};
