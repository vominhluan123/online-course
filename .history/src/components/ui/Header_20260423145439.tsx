'use client'
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./Toogle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card text-card-foreground border-border">
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT */}
        <div className="flex-1">
          <h2 className="font-heading md:hidden block  text-lg font-bold">
            Khoá Học Likha
          </h2>
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <ModeToggle></ModeToggle>
          { <Link></Link><UserButton />}
        </div>
      </div>
    </header>
  );
};

export default Header;
