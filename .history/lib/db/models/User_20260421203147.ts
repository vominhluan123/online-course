import { UserRole, UserStatus } from "@/types/user";
import { InferSchemaType, model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email_address: { type: String, required: true, unique: true },
    avatar: { type: String },
    status: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    role: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },

    courses: [{ type: Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true, // auto createdAt + updatedAt
  },
);

type UserType = InferSchemaType<typeof userSchema>;
export const User = model("User", userSchema);
