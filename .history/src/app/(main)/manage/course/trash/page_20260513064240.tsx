import { getTrashCourses } from "@/actions/course/get-course";

import { CourseTrashType } from "@/types/course";
import { DataTable } from "../data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  const courses = await getTrashCourses();

  const data: CourseTrashType[] = courses.map((course) => ({
    _id: course._id.toString(),
    title: course.title,
    image: course.image,
    status: course.status,
    price: course.price,
    createdAt: course.createdAt,
  }));

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
