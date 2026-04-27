"use server";
import { ConnectToDatabase, User } from "@/lib/db";
import { CreateUserInput } from "@/types/user";

export default async function createUser(params: CreateUserInput) {
  try {
    await ConnectToDatabase();
    const newUser = await User.create(params);
    return  return JSON.parse(JSON.stringify(course))
  } catch (error) {
    console.log(error);
  }
}
