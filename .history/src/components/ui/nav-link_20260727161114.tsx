"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActieveLink } from "../../types/link.types";

const NavLink = ({ children, url }: ActieveLink) => {
  const pathname = usePathname();
  const isActive = url === "/" ? pathname === "/" : pathname.startsWith(url);
  return (
    <Link
      className={`svg-animate p-3 gap-3 flex items-center rounded-md hover:bg-accent/10 hover:text-sidebar-accent-FG transition-colors data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground`}
      href={url}
      data-active={isActive}
    >
      {children}
    </Link>
  );
};

export default NavLink;
