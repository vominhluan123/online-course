import { requireAdmin } from "@/lib/auth/require-admin";
import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireAdmin();
  return <div>{children}</div>;
};

export default AdminLayout;
