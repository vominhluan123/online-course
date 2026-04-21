import { UserRole, UserStatus } from "@/types/user";
import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  createdAt: string;
  status: UserStatus;
  role: UserRole;
  courses: string;
}
