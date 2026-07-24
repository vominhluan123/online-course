import { getMyCourses } from "@/actions/user/get-My-Courses";

const Page = async () => {
  const courses = await getMyCourses();

  return (
    <div>
      Khu vực học tập
      {courses.map((course: any) => (
        <div key={course._id}>{course.title}</div>
      ))}
    </div>
  );
};

export default Page;
