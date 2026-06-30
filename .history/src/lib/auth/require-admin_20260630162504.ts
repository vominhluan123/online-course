import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const user = await requireUser();

  if (!user || user.role !== UserRole.ADMIN) {
    redirect("/forbidden");
  }

  return user;
}
