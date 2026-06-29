"use sever";

import { ConnectToDatabase } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export async function createHistory(params: any) {
  try {
    await ConnectToDatabase();
    const {} = auth()
  } catch (error) {
    console.log(error);
  }
}
