import { getLessonBySlug } from "@/actions/lesson/get-lesson";
import { EmptyState } from "@/components/course";
import { CircleX } from "lucide-react";

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
  const videoId = lessonDetails.video_url?.split("v=").at(-1);
  return (
    <div>
      <div className="aspect-video"></div>
      <iframe
        width="1249"
        height="834"
        src="https://www.youtube.com/embed/${videoId}`
        title="OUT SPEED = WIN?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
