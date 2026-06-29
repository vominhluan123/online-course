"use client";

import { Checkbox } from "@/components/ui/checkbox";

type LessonProgressCheckboxProps = {
  lessonId: string;
};

export function LessonProgressCheckbox({
  lessonId,
}: LessonProgressCheckboxProps) {
  return (
    <Checkbox
      className="mt-1"
      onCheckedChange={(checked) => {
        void fetch("/api/progress", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lessonId,
            completed: checked === true,
          }),
        });
      }}
    />
  );
}
