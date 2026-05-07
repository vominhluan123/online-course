import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  console.log(session);
  ?
  return <div>{children}</div>;
};

export default AdminLayout;
