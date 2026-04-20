import CourseItems from "@/components/course/CourseItems";
import Heading from "@/components/ui/Heading";

export default async function Home() {
  return (
    <div className="p-5">
      <Heading>Khám phá</Heading>
      <div className="course grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseItems></CourseItems>
      </div>
    </div>
  );
}
