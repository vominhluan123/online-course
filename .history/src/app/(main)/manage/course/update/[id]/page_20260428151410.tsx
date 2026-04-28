import { CourseUpdate } from "@/components/course";
import { Heading } from "@/components/ui";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // 🔥 phải await

  const course = await getCourseById(id);

  console.log("🚀 ~ Page ~ course:", course);

  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate course={course} />
    </>
  );
};
