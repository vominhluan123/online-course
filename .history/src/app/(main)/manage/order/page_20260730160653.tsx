import { getAllOrders } from "@/actions/order/get-order";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const orders = await getAllOrders();
  const data = orders.map((order: Order) => ({
    _id: order._id.toString(),
    code: order.code,
    course: order.course.title,
    email: order.user.email,
    price: order.price,
    voucherCode: order.voucherCode,
    status: order.status,
    createdAt: order.createdAt,
  }));

  if (!data.length) {
    return <h1>Chưa có đơn hàng</h1>;
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end"></div>
      <DataTable columns={columns} data={data} searchKey="course" />
    </div>
  );
};

export default page;
