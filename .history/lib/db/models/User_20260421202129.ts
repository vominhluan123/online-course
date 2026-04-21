import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: String,
    name: String,
    username: String,
    email_address: String,
    avatar: String,
    courses: [{ type: Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true },
);

export const User = model("User", userSchema);
