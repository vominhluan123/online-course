"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function LessonSidebar({ lessons, slug, lessonId }) {
  return (
    <>
      {lessons.map((lesson) => {
        const isActive = lesson._id === lessonId;

        return (
          <div key={lesson._id} className="flex gap-3">
            <Checkbox
              checked={lesson.isCompleted}
              onCheckedChange={(v) => {
                // call API mark done
              }}
            />

            <Link href={`/course/${slug}/learn/${lesson._id}`}>
              {lesson.title}
            </Link>
          </div>
        );
      })}
    </>
  );
}
