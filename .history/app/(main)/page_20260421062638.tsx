import CourseItems from "@/components/course/CourseItems";
import { CourseGird } from "@/components/ui";
import Header from "@/components/ui/Header";

export default async function Home() {
  return (
    <>
     <Header></Header>
      <CourseGird>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </CourseGird>
    </>
  );
}
