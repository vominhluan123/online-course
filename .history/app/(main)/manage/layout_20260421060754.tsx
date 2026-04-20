import Custom404 from "@/app/not-found";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) return red
  return <div>{children}</div>;
};

export default AdminLayout;
