import { cn } from "@/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full border focus:outline-none transition-f focus:ring-2 focus:ring-ring border-border  bg-input rounded-md px-3 py-2",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
