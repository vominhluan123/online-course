import { UserRole } from "@/types/user";
import { redirect } from "next/navigation";
import { requireUser } from "./require-user";

export async function requireAdmin() {
  const user = await requireUser();

  if (!user || user.role !== UserRole.ADMIN) {
    redirect("/forbidden");
  }

  return user;
}
