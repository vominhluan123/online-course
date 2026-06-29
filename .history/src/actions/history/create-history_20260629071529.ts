"use sever";

import { ConnectToDatabase, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function createHistory(params: any) {
  try {
    await ConnectToDatabase();
    const { userId } = auth();
    const findUser = await User.findOne({ userId : userId});
    if
  } catch (error) {
    console.log(error);
  }
}
