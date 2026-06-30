import { requireAdmin } from "@/lib/auth/require-admin";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireAdmin();
  return <div>{children}</div>;
};

export default AdminLayout;
