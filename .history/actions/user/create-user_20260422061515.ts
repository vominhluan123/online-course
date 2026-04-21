"use server";
import { ConnectToDatabase, User } from "@/lib/db";
import { CreateUserInput } from "@/types/user";

export default async function createUser(params: CreateUserInput) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    clg
  }
}
