const Header = () => {
  return (
    <header className="sticky rounded-full top-0 z-50 backdrop-blur bg-secondary text-secondary-foreground border-border">
      <div className=" mx-auto flex items-center justify-end px-6 py-3">
        <div className="flex items-center gap-3">
          <button>🌙</button>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
