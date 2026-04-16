const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-gray-200 mb-5">
      <h1 className="font-heading text-lg font-bold">Khoá Học Likha</h1>
      <MenuItem>
      <MenuItem>
      <MenuItem>
        <ul></ul>
    </nav>
  );
};
function MenuItem(url: string, title: string, icon?: React.ReactNode) {
  return <li className="flex gap-4 text-sm"></li>;
}
export default Sidebar;
