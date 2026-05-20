import { CourseUpdateContent, EmptyState } from "@/components/course";
import { Heading } from "@/components/ui";
import { CourseTypeModel } from "@/lib/db";
import { getCourseById } from "@/lib/services/course.service";
import { CircleX } from "lucide-react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const course: CourseTypeModel = await getCourseById(id);
  console.log("🚀 ~ Page ~ course:", course);

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

  return (
    <>
      <Heading className="mb-10">
        Nội dung: <strong className="text-primary">{course.title}</strong>
      </Heading>
      <CourseUpdateContent course={JSON.parse(J)}></CourseUpdateContent>
    </>
  );
};
export default Page;
