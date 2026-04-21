import { UserRole, UserStatus } from "@/types/user";
import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email_address: { type: String, required: true, unique: true },
    avatar: { type: String },

    status: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    role: { type: String,  enum: Object.values(UserStatus), default:  },

    courses: [{ type: Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true, // auto createdAt + updatedAt
  },
);

export const User = model("User", userSchema);
