import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  console.log(session);

  return <div>{children}</div>;
};

export default AdminLayout;
