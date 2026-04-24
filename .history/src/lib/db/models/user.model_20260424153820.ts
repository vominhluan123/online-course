import { UserRole, UserStatus } from "@/types/user";
import { HydratedDocument, model, models, Schema, Types } from "mongoose";
export type UserTypeModel = {
  clerkId: string;
  name?: string;
  username: string;
  email: string;
  avatar?: string;
  status: UserStatus;
  role: UserRole;
  courses: Types.ObjectId[];
};
const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
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
    timestamps: true,
  },
);

export type UserSchemaType = HydratedDocument<UserTypeModel>;
export const User = models.User || model<UserTypeModel>("User", userSchema);
