import { EmptyState } from "@/components/course";
import { getCourseById } from "@/lib/services/course.service";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await getCourseById(params.id);

  if (!course) {
    return (
      <EmptyStatee
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
  }

  return <></>;
};
export default Page;
