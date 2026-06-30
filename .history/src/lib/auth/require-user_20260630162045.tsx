import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { getUserInfo } from "../services/user.service";
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
