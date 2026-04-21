"use server";

import { ConnectToDatabase, User } from "@/lib/db";

export default async function createUser(params: UserSchemaType) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
