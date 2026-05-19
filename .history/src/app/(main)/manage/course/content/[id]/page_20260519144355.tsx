import { EmptyState } from "@/components/course";
import { getCourseById } from "@/lib/services/course.service";
import { CircleX } from "lucide-react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const course = await getCourseById(id);

  if (!course) {
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
  }

  return <div></div>;
};
export default Page;
