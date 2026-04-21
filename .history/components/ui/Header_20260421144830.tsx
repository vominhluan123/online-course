import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card text-card-foreground border-border">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="font-heading">
          <h1 className="font-heading text-lg font-bold mb-5 text-center">
            Khoá Học Likha
          </h1>
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
