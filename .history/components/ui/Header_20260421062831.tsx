const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b p-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-bold text-lg">Evonhub</div>

        {/* Menu */}
        <nav className="flex gap-6 text-sm">
          <a className="hover:text-indigo-500 transition">Home</a>
          <a className="hover:text-indigo-500 transition">Docs</a>
          <a className="hover:text-indigo-500 transition">Blog</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button>🌙</button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
