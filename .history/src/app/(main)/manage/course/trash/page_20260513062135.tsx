import { getTrashCourses } from "@/actions/course/get-course";

import { CourseTrashType } from "@/types/course";
import { columns } from "../columns";
import { DataTable } from "../data-table";

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

  return <DataTable columns={columns} data={data} />;
};

export default page;
