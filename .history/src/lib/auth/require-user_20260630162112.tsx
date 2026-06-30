"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/actions/user/get-user-info";

export async function requireUser() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserInfo(userId);

  if (!user) {
    redirect("/sign-in");
  }

  return user;
}
