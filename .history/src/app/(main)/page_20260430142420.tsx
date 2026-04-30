import { getCourse } from "@/actions/course/get-course";
import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const courses = await getCourse();
  return (
    <>
      <CourseGird>
        {courses?.map((course) => (
          <CourseItems
            key={course._id.toString()}
            course={course}
          ></CourseItems>
        ))}
      </CourseGird>
    </>
  );
}
