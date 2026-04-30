import { MenuLinks } from "@/lib/constants";
import { MenuLinkProps } from "../../types/link.types";
import { NavLink } from "../ui";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className=" h-full p-5 border-r border-sidebar-boder bg-sidebar text-sidebar-foreground">
      <Link></Link>
      <span className="font-heading lg:text-lg text-sm font-bold mb-5 text-center block">
        Khoá Học Likha
      </span>
      <ul className="flex flex-col gap-2">
        {MenuLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <MenuLink
              key={index}
              url={item.url}
              title={item.title}
              icon={<Icon className="size-5" />}
            />
          );
        })}
      </ul>
    </nav>
  );
};
function MenuLink({ url = "/", title = "", icon }: MenuLinkProps) {
  return (
    <li>
      <NavLink url={url}>
        {icon}
        {title}
      </NavLink>
    </li>
  );
}
export default Sidebar;
