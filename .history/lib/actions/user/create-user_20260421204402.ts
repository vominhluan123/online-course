"use server";

import { ConnectToDatabase, User } from "@/lib/db";

export default async function createUser(params: any) {
  try {
    ConnectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
