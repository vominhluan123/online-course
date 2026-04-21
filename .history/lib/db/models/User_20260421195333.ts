import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
}
