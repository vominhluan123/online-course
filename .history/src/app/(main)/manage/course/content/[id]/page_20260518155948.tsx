import { getCourseById } from "@/lib/services/course.service";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await getCourseById(params.id);

  if (!course) return null;

  return <></>;
};
export default Page;
