"use sever";

import { ConnectToDatabase } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function createHistory(params: any) {
  try {
    await ConnectToDatabase();
    const {userId} = auth()
  } catch (error) {
    console.log(error);
  }
}
