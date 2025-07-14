import mongoose, { Schema, Model, model } from "mongoose";

export interface Tag extends Document {
  name: string;
}

const TagSchema: Schema = new Schema<Tag>({
  name: [
    {
      type: String,
      required: true,
    },
  ],
});

const TagModel: Model<Tag> = model<Tag>("Tag", TagSchema);

export default TagModel;
