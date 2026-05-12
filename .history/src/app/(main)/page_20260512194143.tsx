import { CourseItems } from "@/components/course";
import { CourseGird } from "@/components/ui";

export default async function Home() {
  const courses = await getPublicCourse();
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
