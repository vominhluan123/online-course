import { getCourse } from "@/actions/course/get-course";
import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const courses = await getCourse();
  console.log("🚀 ~ Home ~ course:", courses);
  return (
    <>
      <CourseGird>
        {}
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
