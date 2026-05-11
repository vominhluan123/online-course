import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";

export const courses: CourseTableType[] = [
  {
    _id: "728ed52f",
    price: 100,
    status: CourseStatus.PENDING,
    title: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489ed42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "s489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1daa42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "4sss89e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489asase1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489aaaae1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "1111489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489easaaa2221d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d42123232",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];
const page = () => {
  return <div>Quản lý khoá học</div>;
};

export default page;
