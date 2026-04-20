import CourseItems from "@/components/course/CourseItems";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  return (
    <>
      <div className="p-5 bg-pri">Header</div>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
