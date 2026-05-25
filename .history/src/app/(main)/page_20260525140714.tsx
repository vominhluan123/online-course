import { getPublicCourse } from "@/actions/course/get-course";
import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const courses = await getPublicCourse();
  return (
    <>
      <CourseGird>
        {courses?.map((course) => (
          <CourseIItems
            key={course._id.toString()}
            course={course}
          ></CourseIItems>
        ))}
      </CourseGird>
    </>
  );
}
