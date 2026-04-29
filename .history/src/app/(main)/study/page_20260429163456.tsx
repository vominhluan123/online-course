import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

const page = () => {
  return (
    <CourseGird>
      {courses?.map((course) => (
        <CourseItems key={course._id.toString()} course={course}></CourseItems>
      ))}
    </CourseGird>
  );
};

export default page;
