import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId, isAuthenticated } = auth();
   if (!userId) return RedirectToSignIn();
  return <div>{children}</div>;
};

export default AdminLayout;
