import { getTrashCourses } from "@/actions/course/get-course";

import { DataTable } from "../data-table";

const page = async () => {
  const courses = await getTrashCourses();

  const data = courses.map((course) => ({
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
