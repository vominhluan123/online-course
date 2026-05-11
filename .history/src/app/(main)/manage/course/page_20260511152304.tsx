import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const courses: CourseTableType[] = [
  {
    _id: "728ed52f",
    image: "https://picsum.photos/300/200?random=1",
    title: "React cho người mới bắt đầu",
    price: 100,
    status: CourseStatus.PENDING,
    createdAt: new Date(),
  },
  {
    _id: "489e1d42",
    image: "https://picsum.photos/300/200?random=2",
    title: "Next.js Full Course",
    price: 125,
    status: CourseStatus.APPROVED,
    createdAt: new Date(),
  },
  {
    _id: "489ed42",
    image: "https://picsum.photos/300/200?random=3",
    title: "TypeScript Practical",
    price: 150,
    status: CourseStatus.REJECTED,
    createdAt: new Date(),
  },
  {
    _id: "s489e1d42",
    image: "https://picsum.photos/300/200?random=4",
    title: "Tailwind CSS Mastery",
    price: 99,
    status: CourseStatus.PENDING,
    createdAt: new Date(),
  },
  {
    _id: "489e1daa42",
    image: "https://picsum.photos/300/200?random=5",
    title: "Node.js API Bootcamp",
    price: 199,
    status: CourseStatus.APPROVED,
    createdAt: new Date(),
  },
];
const page = () => {
  const data = courses;
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default page;
