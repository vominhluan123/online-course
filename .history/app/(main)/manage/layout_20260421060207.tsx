import { auth } from "@clerk/nextjs/server";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const {userID} = auth()
  return <div>{children}</div>;
};

export default AdminLayout;
