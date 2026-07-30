import { getAllOrders } from "@/actions/order/get-order";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const orders = await getAllOrders();
  console.log("🚀 ~ page ~ orders:", orders);
  const data = orders.map((order) => ({
    _id: order._id.toString(),
    code: order.code,
    course: order.course.title,
    email: order.user,
    total: order.total,
    voucherCode: order.voucher,
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
