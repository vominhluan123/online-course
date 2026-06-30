import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserInfo(userId);

  if (!user || user.role !== UserRole.ADMIN) {
    redirect("/forbidden");
  }

  return user;
}
