import CourseItems from "@/components/course/CourseItems";
import { CourseGird } from "@/components/ui";

const page = () => {
  return (
    <CourseGird>
      <CourseItems></CourseItems>
      <CourseItems></CourseItems>
      <CourseItems></CourseItems>
    </CourseGird>
  );
};

export default page;
