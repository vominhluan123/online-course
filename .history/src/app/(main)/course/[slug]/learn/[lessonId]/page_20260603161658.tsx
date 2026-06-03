import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

return (
  <div className="mx-auto max-w-7xl space-y-6 p-4">
    <div className="relative overflow-hidden rounded-xl border bg-black shadow">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={lessonDetails.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Previous */}
      <Link
        href="#"
        className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronLeft className="size-6" />
      </Link>

      {/* Next */}
      <Link
        href="#"
        className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
      >
        <ChevronRight className="size-6" />
      </Link>
    </div>

    <div className="rounded-xl border p-6">
      <h1 className="text-2xl font-bold">{lessonDetails.title}</h1>

      <p className="mt-2 text-muted-foreground">Bài học trong khóa học</p>
    </div>
  </div>
);
