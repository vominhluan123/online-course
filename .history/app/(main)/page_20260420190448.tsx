import CourseItems from "@/components/course/CourseItems";

export default async function Home() {
  return (
    <div className="p-5">
      <div className="course grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseItems></CourseItems>
        <CourseItems></CourseItems>
      </div>
    </div>
  );
}
