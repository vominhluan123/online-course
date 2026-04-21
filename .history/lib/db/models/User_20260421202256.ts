import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email_address: { type: String, required: true, unique: true },
    avatar: { type: String },

    status: { type: String, enum: Object.values(User), default: "ACTIVE" },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },

    courses: [{ type: Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true, // auto createdAt + updatedAt
  },
);

export const User = model("User", userSchema);
