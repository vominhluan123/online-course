const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-gray-200 mb-5">
      <h1 className="font-heading text-lg font-bold">Khoá Học Likha</h1>

      <ul>
        <MenuItem ></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </ul>
    </nav>
  );
};
function MenuItem(
  url: "/",
  title: "",
): { url: string; title: string; icon?: React.ReactNode } {
  return (
    <li className="flex gap-4 text-sm">
      <a href={url}>{title}</a>
    </li>
  );
}
export default Sidebar;
