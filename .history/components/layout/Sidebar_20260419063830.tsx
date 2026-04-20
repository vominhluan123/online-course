import { MenuLinks } from "@/constants";
import ActiveLink from "../active/NavLink";
import { MenuLinkProps } from "../types";

const Sidebar = () => {
  return (
    <nav className=" h-full p-5 border-r border-sidebar-boder bg-sidebar text-sidebar-foreground">
      <h1 className="font-heading text-lg font-bold mb-5 text-center">
        Khoá Học Likha
      </h1>

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
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
