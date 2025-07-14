import { Request, Response } from "express";
import TagModel from "../models/tags.model";

export const TagsCreate = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).json({
        message: "Name is required",
      });
    }

    const newTag = await TagModel.create({
      name,
    });

    return res.status(201).json({
      message: "Tag created successfully",
      name: newTag,
    });
  } catch (error) {
    console.log("Create tag error: ", error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
