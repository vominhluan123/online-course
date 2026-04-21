import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  createdAt: string;
  status: user;
  role: string;
  courses: string;
}
