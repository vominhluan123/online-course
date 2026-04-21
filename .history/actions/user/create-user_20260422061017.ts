"use server";
import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";

export default async function createUser(params: cre) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
