import { Request, Response } from "express";
import LinkModel from "../models/link.model";

export const link = async (req: Request, res: Response) => {
  try {
    const { link } = req.body;
    const userId = req.userId;

    if (!link) {
      return res.status(400).json({
        message: "Link is required",
      });
    }

    const newLink = await LinkModel.create({
      link,
      userId,
    });

    return res.status(201).json({
      message: "Link created successfully",
      link: newLink,
    });
  } catch (error) {
    console.log("Create Link error: ", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
