"use server";
import { ConnectToDatabase, User, UserSchemaType } from "@/lib/db";

export default async function createUser(params: cret) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
