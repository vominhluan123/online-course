import { CourseUpdate } from "@/components/course";
import { Heading } from "@/components/ui";
import { getCourseById } from "@/lib/services/course.service";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await getCourseById(params.id);

  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate course={course} />
    </>
  );
};

export default Page;
