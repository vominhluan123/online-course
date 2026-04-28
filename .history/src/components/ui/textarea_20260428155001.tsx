import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border focus:outline-none transition-all outline-none focus:ring-2 focus:ring-ring border-border  bg-input rounded-md min-h-[120px]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
