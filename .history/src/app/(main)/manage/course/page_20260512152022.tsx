import { getCourse } from "@/actions/course/get-course";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const courses = await getCourse();
  return (
    <div>
      <DataTable columns={columns} data={courses|| []} />
    </div>
  );
};

export default page;
