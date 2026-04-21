import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card text-card-foreground border-border">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="lg:hidden">
          <h2 className="font-heading text-lg font-bold">Khoá Học Likha</h2>
        </div>
        <div className="flex items-center gap-2">
          <button>🌙</button>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
