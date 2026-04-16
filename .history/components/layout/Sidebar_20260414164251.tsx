import { MenuLinks } from "@/constants";

const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-gray-200 mb-5">
      <h1 className="font-heading text-lg font-bold">Khoá Học Likha</h1>

      <ul>
        {MenuLinks.map((item, index) => (
          <MenuLink
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuLink>
        ))}
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
      <a className="gap-4 flex items-center" href={url}>
        {icon}
        {title}
      </a>
    </li>
  );
}
export default Sidebar;
