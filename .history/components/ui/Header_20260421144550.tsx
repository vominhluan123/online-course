import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card text-card-foreground border-border">
      <div className=" mx-auto flex items-center justify-end px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <h2></h2>
          <div className="flex items-center gap-2">
            <button>🌙</button>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
