import mongoose, { Schema, Document, model, Model } from "mongoose";

interface Link extends Document {
  hash: string;
  userId: mongoose.Types.ObjectId;
}

const LinkSchema: Schema = new Schema<Link>({
  hash: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

const LinkModel: Model<Link> = model<Link>("Link", LinkSchema);

export default LinkModel;
