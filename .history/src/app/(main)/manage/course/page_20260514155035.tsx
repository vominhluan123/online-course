import { getAllCourses, getTrashCourses } from "@/actions/course/get-course";

import { EmptyCourse } from "@/components/course";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const [courses, trashCourses] = await Promise.all([
    getAllCourses(),
    getTrashCourses(),
  ]);

  const trashCount = trashCourses.length;

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
            <Button variant="outline" className="relative">
              Thùng rác
              {trashCount > 0 && (
                <Badge
                  className="
                    ml-2
                    h-5
                    min-w-5
                    rounded-full
                    px-1
                    text-xs
                  "
                >
                  {trashCount}
                </Badge>
              )}
            </Button>
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
