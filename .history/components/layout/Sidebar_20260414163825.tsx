import { MenuLink } from "@/constants";

const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-gray-200 mb-5">
      <h1 className="font-heading text-lg font-bold">Khoá Học Likha</h1>

      <ul>
        {MenuLink.map((item, index) => {
          <MenuLinks
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuLinks>;
        })}
      </ul>
    </nav>
  );
};
function MenuLinks({
  url = "/",
  title = "",
  icon = "",
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
}
export default Sidebar;
