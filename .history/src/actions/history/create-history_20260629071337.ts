"use sever";

import { ConnectToDatabase } from "@/lib/db";

export async function createHistory(params: any) {
  try {
    await ConnectToDatabase();
    
  } catch (error) {
    console.log(error);
  }
}
