import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  
}
