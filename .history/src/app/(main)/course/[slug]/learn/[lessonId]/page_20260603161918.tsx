import { getLessonBySlug } from "@/actions/lesson/get-lesson";
import { EmptyState } from "@/components/course";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
};

export default async function LearnPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const lessonDetails = await getLessonBySlug({ slug, lessonId });
  if (!lessonDetails)
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
 const url = new URL(lessonDetails.video_url);
 const videoId = url.searchParams.get("v");
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
}
