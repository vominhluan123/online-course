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
const params = {slug}
  const lessonDetails = await getLessonBySlug({ slug, lessonId });
  if (!lessonDetails) return  <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
       return <div>{lessonDetails.video_url}</div>;
}
