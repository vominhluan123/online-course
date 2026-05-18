import { getCourseById } from "@/lib/services/course.service";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ created?: string }>;
}) => {
  const { id } = await params;

  const course = await getCourseById(id);
  console.log("🚀 ~ Page ~ course:", course);

  if (!course) return null;

  return <></>;
};

export default Page;
