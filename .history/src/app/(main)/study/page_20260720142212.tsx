import { getMyCourses } from "@/actions/course.actions";

const Page = async () => {
  const courses = await getMyCourses();

  return (
    <div>
      {courses.map((course: any) => (
        <div key={course._id}>{course.title}</div>
      ))}
    </div>
  );
};

export default Page;
