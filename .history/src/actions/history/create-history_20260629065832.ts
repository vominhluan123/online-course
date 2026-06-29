"use sever";

import { ConnectToDatabase } from "@/lib/db";

export async function createHistory(params:type) {
  try {
    ConnectToDatabase
  } catch (error) {
    console.log(error);
  }
}