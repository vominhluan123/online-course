import { getAllOrders } from "@/actions/order/get-order";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const orders = await getAllOrders();
  const data = orders.map((order) => ({
    _id: order._id.toString(),
    code: order.code,
    course: order.course.title,
    user: order.user.email,
    originalPrice: order.originalPrice,

    salePrice: order.salePrice,

    discount: order.discount,

    total: order.total,

    voucherCode: order.voucher?.code ?? "-",

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
