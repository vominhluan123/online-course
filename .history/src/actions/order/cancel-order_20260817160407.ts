"use server";

import { ConnectToDatabase, Order, User } from "@/lib/db";
import { OrderStatus } from "@/types/order";
import mongoose from "mongoose";

type CancelOrderParams = {
  id: string;
};

export async function cancelOrder({ id }: CancelOrderParams) {
  await ConnectToDatabase();

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const order = await Order.findById(id).session(session);

    if (!order) {
      throw new Error("Không tìm thấy đơn hàng");
    }

    if (order.status !== OrderStatus.PENDING) {
      throw new Error("Chỉ có thể hủy đơn hàng đang chờ thanh toán");
    }

    // Thu hồi quyền học
    await User.findByIdAndUpdate(
      order.user,
      {
        $pull: {
          courses: order.course,
        },
      },
      { session },
    );

    // Đổi trạng thái đơn
    order.status = OrderStatus.CANCELLED;
    await order.save({ session });

    await session.commitTransaction();

    return {
      success: true,
      message: "Hủy đơn hàng thành công",
    };
  } catch (error) {
    await session.abortTransaction();

    console.log(error);

    return {
      success: false,
      message: error instanceof Error ? error.message : "Hủy đơn hàng thất bại",
    };
  } finally {
    session.endSession();
  }
}
