import { getLessonBySlug } from "@/actions/lesson/get-lesson";
import { EmptyState } from "@/components/course";
import { CircleX } from "lucide-react";
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
  if (!lessonDetails?.video_url)
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
    <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
      {/* Main content */}
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl border">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={lessonDetails.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            ;
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h1>{lessonDetails.title}</h1>
        </div>
      </div>

      {/* Lesson sidebar */}
      <aside className="rounded-xl border bg-card">
        <div className="border-b p-4">
          <h2 className="font-semibold">Nội dung khóa học</h2>
        </div>

        {/* <div className="max-h-[80vh] overflow-y-auto">
          {lessonDetails.map((lesson) => (
            <Link
              key={lesson._id}
              href={`/learn/${slug}/${lesson._id}`}
              className="block border-b p-4 hover:bg-muted"
            >
              {lesson.title}
            </Link>
          ))}
        </div> */}
      </aside>
    </div>
  );
}
