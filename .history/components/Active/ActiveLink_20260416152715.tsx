import Link from "next/link";
import React from "react";
type ActieveLink = {
  url: string;
  children: React.ReactNode;
};
const ActiveLink = ({ children, url }: ActieveLink) => {
  const pathName = useP
  return (
    <Link
      className="p-3 gap-3 flex items-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-FG transition-colors"
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
