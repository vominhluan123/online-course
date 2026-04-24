import { CourseItems } from "@/components/course";
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
