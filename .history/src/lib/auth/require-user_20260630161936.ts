"use server";

import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";
import { getUserInfo } from "../services/user.service";

export async function requireUser() {
  const { userId } = await auth();

  if (!userId) {
    return <RedirectToSignIn />;
  }

  const user = await getUserInfo(userId);

  if (!user) {
    return <RedirectToSignIn />;
  }

  return user;
}