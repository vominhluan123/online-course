"use server";
import { ConnectToDatabase, Course, Order, User } from "@/lib/db";
import { createOrderCode } from "@/lib/format-order";
import { CreateOrderParams, Status } from "@/types/order";
import { auth } from "@clerk/nextjs/server";

export async function createOrder(params: CreateOrderParams) {
  try {
    // ===============================
    // 1. Kết nối database
    // ===============================

    await ConnectToDatabase();

    // ===============================
    // 2. Kiểm tra đăng nhập
    // ===============================

    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "Vui lòng đăng nhập để mua khóa học.",
      };
    }

    // ===============================
    // 3. Tìm user
    // ===============================

    const user = await User.findOne({
      clerkId: userId,
    });

    if (!user) {
      return {
        success: false,
        message: "Không tìm thấy người dùng.",
      };
    }

    // ===============================
    // 4. Tìm khóa học
    // ===============================

    const course = await Course.findById(params);

    if (!course) {
      return {
        success: false,
        message: "Khóa học không tồn tại.",
      };
    }

    // ===============================
    // 5. Kiểm tra đã mua chưa
    // ===============================

    const completedOrder = await Order.findOne({
      user: user._id,
      course: course._id,
      status: Status.COMPLETED,
    });

    if (completedOrder) {
      return {
        success: false,
        message: "Bạn đã sở hữu khóa học này.",
      };
    }

    // ===============================
    // 6. Kiểm tra đơn chờ thanh toán
    // ===============================

    const pendingOrder = await Order.findOne({
      user: user._id,
      course: course._id,
      status: Status.PENDING,
    });

    if (pendingOrder) {
      return {
        success: true,
        message: "Đơn hàng đã tồn tại.",
        order: JSON.parse(JSON.stringify(pendingOrder)),
      };
    }

    // ===============================
    // 7. Tính tiền
    // ===============================

    const originalPrice = course.price;

    const salePrice = course.sale_price || course.price;

    const discount = 0;

    const total = salePrice - discount;

    // ===============================
    // 8. Tạo đơn hàng
    // ===============================

    const order = await Order.create({
      code: createOrderCode(),

      user: user._id,

      course: course._id,

      originalPrice,

      salePrice,

      discount,

      total,

      voucher: null,

      status: Status.PENDING,
    });

    // ===============================
    // 9. Trả kết quả
    // ===============================

    return {
      success: true,
      message: "Tạo đơn hàng thành công.",

      order: JSON.parse(JSON.stringify(order)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Đã xảy ra lỗi.",
    };
  }
}
