import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

const page = () => {
    const courses = await getCourse();
  
  return (
    <CourseGird>
      {courses?.map((course) => (
        <CourseItems key={course._id.toString()} course={course}></CourseItems>
      ))}
    </CourseGird>
  );
};

export default page;
