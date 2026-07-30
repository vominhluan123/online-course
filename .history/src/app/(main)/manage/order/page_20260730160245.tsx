import { getAllOrders } from "@/actions/order/get-order";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const orders = await getAllOrders();

  // const data = courses.map((course) => ({
  //   _id: course._id.toString(),
  //   image: course.image,
  //   title: course.title,
  //   price: course.price,
  //   status: course.status,
  //   createdAt: course.createdAt,
  //   slug: course.slug,
  // }));

  // if (!data.length) {
  //   return <EmptyCourse />;
  // }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end"></div>
      <DataTable columns={columns} searchKey="title" />
    </div>
  );
};

export default page;
