import { MenuLinks } from "@/constants";
import Link from "next/link";

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
function MenuLink({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      
    </li>
  );
}
export default Sidebar;
