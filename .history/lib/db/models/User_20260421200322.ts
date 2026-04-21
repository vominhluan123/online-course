import { UserStatus } from "@/components/types/user/user-status.enum";
import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  createdAt: string;
  status: UserStatus;
  role: UserT;
  courses: string;
}
