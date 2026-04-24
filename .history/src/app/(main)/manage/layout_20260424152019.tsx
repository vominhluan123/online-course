import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");
  const user = await getUserInfo(userId);
  console.log("🚀 ~ AdminLayout ~ user:", user);
  if (!user || user.role !== UserRole.ADMIN) {
    return <Custom404 />;
  }
  // if (user && user.role !== UserRole.ADMIN) return <Custom404 />;
  return <div>{children}</div>;
};

export default AdminLayout;
