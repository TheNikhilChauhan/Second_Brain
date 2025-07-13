import { Request, Response } from "express";
import ContentModel from "../models/content.model";

interface CustomRequest extends Request {
  userId?: string;
}

export const createContent = async (req: CustomRequest, res: Response) => {
  try {
    const { title, link, tags, type } = req.body;

    //userId is coming from middleware
    const userId = req.userId;

    if (!title || !link || !type) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const newContent = await ContentModel.create({
      title,
      link,
      type,
      tags,
      userId,
    });

    return res.status(201).json({
      message: "Content created",
      content: newContent,
    });
  } catch (error) {
    console.log("Create content error: ", error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const displayContent = async (req: CustomRequest, res: Response) => {
  try {
    const contents = await ContentModel.find({ userId: req.userId }).populate(
      "tags"
    );

    res.status(200).json({
      success: true,
      count: contents.length,
      data: contents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch content",
    });
  }
};
