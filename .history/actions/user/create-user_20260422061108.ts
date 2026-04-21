"use server";
import { ConnectToDatabase, User } from "@/lib/db";

export default async function createUser(params: CreateUserInput) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
