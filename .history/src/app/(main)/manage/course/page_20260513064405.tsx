import { getAllCourses } from "@/actions/course/get-course";
import { EmptyCourse } from "@/components/course";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quản lý khóa học</h1>

          <p className="text-muted-foreground">Quản lý tất cả khóa học</p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/manage/course/trash">
            <Button variant="outline">Thùng rác</Button>
          </Link>

          <Link href="/manage/course/create">
            <Button>Tạo khóa học</Button>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
