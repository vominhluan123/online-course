import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
   if (!isAuthenticated) return redirectToSignIn();
  return <div>{children}</div>;
};

export default AdminLayout;
