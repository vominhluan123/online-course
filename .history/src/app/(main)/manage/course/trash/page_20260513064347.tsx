import { getTrashCourses } from "@/actions/course/get-course";

import { Button } from "@/components/ui/button";
import { CourseTrashType } from "@/types/course";
import Link from "next/link";
import { DataTable } from "../data-table";
import { columns } from "./columns";

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
    

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
