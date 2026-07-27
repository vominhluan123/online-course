import { Skeleton } from "@/components/ui/skeleton";

export default function CourseDetailLoading() {
  return (
    <div className="grid min-h-screen grid-cols-1 gap-6 lg:gap-10 xl:grid-cols-[2fr,1fr]">
      <div>
        <Skeleton className="mb-5 mt-5 aspect-video max-w-5xl rounded-lg" />

        <Skeleton className="mb-5 h-9 w-3/4 max-w-3xl" />

        <Skeleton className="mb-3 h-7 w-28" />
        <div className="mb-10 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-card p-5 text-card-foreground"
            >
              <Skeleton className="mb-3 h-4 w-20" />
              <Skeleton className="h-6 w-12" />
            </div>
          ))}
        </div>

        <Skeleton className="mb-3 h-7 w-28" />
        <div className="mb-10 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Skeleton className="mt-1 size-4 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>

        <Skeleton className="mb-3 h-7 w-24" />
        <div className="mb-10 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-start gap-2">
              <Skeleton className="mt-1 size-4 shrink-0 rounded-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ))}
        </div>

        <Skeleton className="mb-4 h-7 w-48" />
        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          <div className="border border-border">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border-b border-border px-5 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 shrink-0 rounded-lg" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="mt-5 rounded-lg bg-card p-5 text-card-foreground">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="ml-auto h-7 w-14 rounded-lg" />
          </div>

          <div className="space-y-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <Skeleton className="size-5 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-56 max-w-full" />
              </div>
            ))}
          </div>

          <Skeleton className="mt-8 h-12 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
