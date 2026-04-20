import CourseItems from "@/components/course/CourseItems";
import CourseGird from "@/components/ui/CourseGird";

export default async function Home() {
  return (
    <CourseGird>
      <CourseItems></CourseItems>
      <CourseItems></CourseItems>
      <CourseItems></CourseItems>
    </CourseGird>
  );
}
