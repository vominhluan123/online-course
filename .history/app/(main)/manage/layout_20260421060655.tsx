import Custom404 from "@/app/not-found";
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
   if (!userId) return <Custom404 />;
  return <div>{children}</div>;
};

export default AdminLayout;
