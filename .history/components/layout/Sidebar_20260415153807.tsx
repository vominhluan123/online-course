import { MenuLinks } from "@/constants";

const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-border bg-sidebar text-sidebar-foreground">
      <h1 className="font-heading text-lg font-bold mb-5">Khoá Học Likha</h1>

      <ul className="flex flex-col gap-2 mb-3">
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
      <a
        className="gap-4 flex items-center rounded-md hover:bg-accent hover:text-accent-foreground transition-all"
        href={url}
      >
        {icon}
        {title}
      </a>
    </li>
  );
}
export default Sidebar;
