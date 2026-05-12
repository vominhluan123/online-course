import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getCourse } from "@/actions/course/get-course";

const page =async () => {
  const courses = await getCourse
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
