import { getCourse } from "@/actions/course/get-course";
import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const course = await getCourse();
  return (
    <>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
