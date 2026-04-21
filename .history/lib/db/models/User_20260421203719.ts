import { UserRole, UserStatus } from "@/types/user";
import { HydratedDocument, InferSchemaType, model, models, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email_address: { type: String, required: true, unique: true },
    avatar: { type: String },
    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },

    courses: [{ type: Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true, // auto createdAt + updatedAt
  },
);

type UserSchemaType = HydratedDocument<typeof userSchema>;
export const User = models.User || model("User", userSchema);
