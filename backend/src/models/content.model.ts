import mongoose, { Schema, Document, model, Model } from "mongoose";

interface Content extends Document {
  title: string;
  link: string;
  tags: mongoose.Types.ObjectId[];
  type: string;
  userId: mongoose.Types.ObjectId;
}

const ContentSchema: Schema = new Schema<Content>({
  title: { type: String, required: true },
  link: { type: String, required: true },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  type: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const ContentModel: Model<Content> = model<Content>("Content", ContentSchema);

export default ContentModel;
