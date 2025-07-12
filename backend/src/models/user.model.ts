import { model, Schema, Document, Model } from "mongoose";

interface Users extends Document {
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
}

const UserSchema: Schema = new Schema<Users>(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true, min: 5, max: 30 },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<Users> = model<Users>("User", UserSchema);

export default UserModel;
