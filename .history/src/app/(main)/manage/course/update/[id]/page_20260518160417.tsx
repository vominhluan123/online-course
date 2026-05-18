import { CourseUpdate, EmptyState } from "@/components/course";
import { Heading } from "@/components/ui";
import { getCourseById } from "@/lib/services/course.service";
import { CircleX } from "lucide-react";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ created?: string }>;
}) => {
  const { id } = await params;
  const { created } = await searchParams;

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

  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>

      <CourseUpdate course={course} isCreated={created === "1"} />
    </>
  );
};

export default Page;
