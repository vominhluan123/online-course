import CourseItems from "@/components/course/CourseItems";
import Heading from "@/components/ui/Heading";

export default async function Home() {
  return (
    <div className="p-5">
      <Heading>Khám phá</Heading>
      <div className="course grid grid-cols-1 md:gir gap-8 mt-5">
        <CourseItems></CourseItems>
      </div>
    </div>
  );
}
