"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./Toogle";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card text-card-foreground border-border transition-all">
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
          {userId ? (
            <UserButton />
          ) : (
            <Link
              href="/sign-in"
              className="font-heading bg-primary text-primary-foreground rounded-full px-6 py-3"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
