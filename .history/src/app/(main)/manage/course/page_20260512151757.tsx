import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
