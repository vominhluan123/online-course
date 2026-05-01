"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./Toogle";

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { userId } = useAuth();
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur  text-card-foreground border-border duration-300 transition-all ${
        isScrolled ? "bg-card/80 backdrop-blur-md shadow-md" : "bg-card"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT */}
        <div className="flex-1">
          <Link href={"/"}>
            <span className="font-heading lg:text-lg text-sm font-bold mb-5 text-center block">
              Khoá Học Likha
            </span>
          </Link>
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
