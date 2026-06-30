"use server";

import { auth } from "@clerk/nextjs/server";
import { getUserInfo } from "../services/user.service";
import { RedirectToSignIn } from "@clerk/nextjs";

export async function requireUser() {
  const { userId } = await auth();

  if (!userId) {
    return RedirectToSignIn();
  }

  const user = await getUserInfo(userId);

  if (!user) {
    return RedirectToSignIn();
  }

  return user;
}
