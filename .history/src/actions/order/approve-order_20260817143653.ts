"use server";
import mongoose from "mongoose";
import { ConnectToDatabase, Order, User } from "@/lib/db";
import { OrderStatus } from "@/types/order";

type ApproveOrderParams = {
  id: string;
};

export async function approveOrder({ id }: ApproveOrderParams) {
  await ConnectToDatabase();

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const order = await Order.findById(id).session(session);

    if (!order) {
      throw new Error("Không tìm thấy đơn hàng");
    }

    if (order.status !== OrderStatus.PENDING) {
      throw new Error("Đơn hàng đã được xử lý");
    }

    const user = await User.findById(order.user).session(session);

    if (!user) {
      throw new Error("Không tìm thấy người dùng");
    }

    // Không thêm trùng khóa học
    const existed = user.courses.some(
      (courseId: mongoose.Types.ObjectId) =>
        courseId.toString() === order.course.toString(),
    );

    if (!existed) {
      user.courses.push(order.course);
      await user.save({ session });
    }

    order.status = OrderStatus.PAID;
    await order.save({ session });

    await session.commitTransaction();

    return {
      success: true,
      message: "Duyệt đơn hàng thành công",
    };
  } catch (error) {
    await session.abortTransaction();

    console.log(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Duyệt đơn hàng thất bại",
    };
  } finally {
    session.endSession();
  }
}
