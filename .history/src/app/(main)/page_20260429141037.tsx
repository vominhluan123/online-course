import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const course =await get
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
