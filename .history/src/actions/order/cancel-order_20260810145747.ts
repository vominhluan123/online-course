"use sever";
import { ConnectToDatabase, Order } from "@/lib/db";
import { statusLabel } from "@/types/course";
import { OrderStatus } from "@/types/order";

type CancelOrderParams = {
  id: string;
};

export async function cancelOrder({ id }: CancelOrderParams) {
  try {
    await ConnectToDatabase();

    const order = await Order.findById(id);

    if (!order) {
      return {
        success: false,
        message: "Không tìm thấy đơn hàng",
      };
    }

    if (order.status !== OrderStatus.PENDING) {
      return {
        success: false,
        message: "Chỉ có thể hủy đơn hàng đang chờ thanh toán",
      };
    }

    order.status = OrderStatus.CANCELLED;

    await order.save();

    return {
      success: true,
      message: "Hủy đơn hàng thành công",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Hủy đơn hàng thất bại",
    };
  }
}
