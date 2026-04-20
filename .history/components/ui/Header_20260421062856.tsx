const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
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
