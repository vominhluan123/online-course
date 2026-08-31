import { getAllOrders } from "@/actions/order/get-order";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const orders = await getAllOrders();
  const data = orders.map((order) => ({
    code: order.code,
    course: order.course.title,
    courseId: order.course._id.toString(),
    user: order.user.email,
    userId: order.user._id.toString(),
    originalPrice: order.originalPrice,
    salePrice: order.salePrice,
    discount: order.discount,
    total: order.total,
    voucherCode: order.voucher ?? "-",
    status: order.status,
    createdAt: order.createdAt,
  }));

  if (!data.length) {
    return <h2>Chưa có đơn hàng</h2>;
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end"></div>
      <DataTable columns={columns} data={data} searchKey="code" />
    </div>
  );
};

export default page;
