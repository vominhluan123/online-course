"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./Toogle";
import { Button } from "./button";

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
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <Button
              variant={"custom"}
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex size-10 items-center justify-center rounded-md !hover:bg-opacity-10"
              onClick={onMenuClick}
            >
              <Menu className="size-5" />
            </Button>
            <Link href={"/"}>
              <span className="font-heading md:hidden block  text-lg font-bold">
                Khoá Học Likha
              </span>
            </Link>
          </div>
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
