import CourseItems from "@/components/course/CourseItems";
import { CourseGird, Header } from "@/components/ui";

export default async function Home() {
  return (
    <>
    <div>
      
    </div>
      <Header></Header>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
