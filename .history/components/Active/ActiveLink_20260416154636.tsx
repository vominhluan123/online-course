"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type ActieveLink = {
  url: string;
  children: React.ReactNode;
};
const ActiveLink = ({ children, url }: ActieveLink) => {
  const Pathname = usePathname();
  const isActive = url === Pathname;
  return (
    <Link
      className={`svg-animate p-3 gap-3 flex items-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-FG transition-colors ${isActive ? "bg-sidebar-accent" : ""}`}
      href={url}
      data-active={isActive}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
