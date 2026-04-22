"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import ThemeIcon from "./ThemeIcon";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      className="h-12 w-12 rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <ThemeIcon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
