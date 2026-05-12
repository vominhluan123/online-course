import { getCourse } from "@/actions/course/get-course";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const courses = await getCourse();
   const data = (courses || []).map((course) => ({
     _id: course._id.toString(),
     image: course.image,
     title: course.title,
     price: course.price,
     status: course.status,
     createdAt: course.createdAt,
   }));

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
