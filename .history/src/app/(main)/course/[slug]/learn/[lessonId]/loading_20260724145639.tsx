import { Skeleton } from "@/components/ui/skeleton";

export default function LearnPageLoading() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
      <div className="space-y-6">
        <Skeleton className="aspect-video rounded-xl" />

        <div className="grid grid-cols-2 gap-3 md:hidden">
          <Skeleton className="h-12 rounded-lg" />
          <Skeleton className="h-12 rounded-lg" />
        </div>

        <div className="rounded-xl border border-border bg-red-500 p-6">
          <Skeleton className="h-7 w-3/4 max-w-xl" />
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <Skeleton className="mb-4 h-6 w-48" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>

      <aside className="space-y-4 rounded-xl border border-border bg-card p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />

        <div className="space-y-2 pt-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-border p-3"
            >
              <Skeleton className="size-9 shrink-0 rounded-full" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
