"use sever";

import { ConnectToDatabase } from "@/lib/db";

export async function createHistory(params: any) {
  try {
    await ConnectToDatabase();
    const {} = 
  } catch (error) {
    console.log(error);
  }
}
