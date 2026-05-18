import { CourseUpdate } from "@/components/course";
import { Heading } from "@/components/ui";
import { getCourseById } from "@/lib/services/course.service";

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

  if (!course) return null;

  return (
    <>

    </>
  );
};

export default Page;
