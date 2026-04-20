import CourseItems from "@/components/course/CourseItems";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  return (
    <>
      <div className=" w-4/5 p-5 bg-secondary text-secondary-foreground">
        Header
      </div>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
