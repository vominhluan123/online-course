import { getPublicCourse } from "@/actions/course/get-course";
import { CourseItems } from "@/components/course";
import { Skeleton } from "@/components/ui/skeleton";
import { CourseGird } from "@/components/ui";
import { Suspense } from "react";

async function PublicCourseList() {
  const courses = await getPublicCourse();

  return (
    <CourseGird>
      {courses?.map((course) => (
        <CourseItems
          key={course._id.toString()}
          course={course}
        ></CourseItems>
      ))}
    </CourseGird>
  );
}

function CourseGridSkeleton() {
  return (
    <CourseGird>
      {Array.from({ length: 8 }).map((_, index) => (
        <article
          key={index}
          className="flex h-full flex-col rounded-xl border border-border bg-card p-3 text-card-foreground md:p-4"
        >
          <Skeleton className="aspect-video rounded-lg" />

          <div className="flex flex-1 flex-col pt-4">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
              <Skeleton className="h-8 w-16 shrink-0 rounded-full" />
            </div>

            <div className="mt-auto flex items-center justify-between gap-3">
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-6 w-24" />
            </div>

            <Skeleton className="mt-6 h-10 rounded-lg md:mt-10 md:h-12" />
          </div>
        </article>
      ))}
    </CourseGird>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<CourseGridSkeleton />}>
      <PublicCourseList />
    </Suspense>
  );
}
