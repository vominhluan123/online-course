const Sidebar = () => {
  return (
    <nav className="p-5 border-r border-gray-200 mb-5">
      <h1 className="font-heading text-lg font-bold">Khoá Học Likha</h1>
      <MenuItem>
        <ul></ul>
      </MenuItem>
    </nav>
  );
};
function MenuItem(url: string, title: string, icon?: React.ReactNode) {
  <div className="flex gap-4 text-sm"></div>;
}
export default Sidebar;
