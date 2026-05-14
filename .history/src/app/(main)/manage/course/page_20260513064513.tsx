import { getAllCourses } from "@/actions/course/get-course";
import { EmptyCourse } from "@/components/course";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const courses = await getAllCourses();
  const data = courses.map((course) => ({
    _id: course._id.toString(),
    image: course.image,
    title: course.title,
    price: course.price,
    status: course.status,
    createdAt: course.createdAt,
    slug: course.slug,
  }));
  if (!data.length) {
    return <EmptyCourse />;
  }
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Link href="/manage/course/trash">
            <Button variant="outline">Thùng rác</Button>
          </Link>

          <Link href="/manage/course/new">
            <Button>Tạo khóa học</Button>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
