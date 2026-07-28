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
      className={`
    relative
    text-card-foreground
    transition-all duration-300
    ${
      isScrolled
        ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm border border-white/20 dark:border-white/10"
        : "bg-transparent"
    }
  `}
    >
      {isScrolled && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/10" />
      )}
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* LEFT */}
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <Button
              variant={"ghost"}
              type="button"
              aria-label="Open menu"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="size-5" />
            </Button>
            <Link
              href={"/"}
              className="min-w-0 max-w-[52vw] text-card-foreground transition-colors hover:text-primary sm:max-w-none"
              aria-label="Về trang chủ"
            >
              <span className="font-heading block text-primary-foreground truncate text-base font-bold sm:text-lg">
                Khoá Học Likha
              </span>
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
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
