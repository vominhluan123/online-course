import { ConnectToDatabase } from "@/lib/db";

export default async function name({ userId }) {
  try {
    ConnectToDatabase();
  } catch (error) {}
}
