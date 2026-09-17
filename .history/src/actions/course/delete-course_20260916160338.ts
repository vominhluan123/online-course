"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

import { ConnectToDatabase, Course, User, History, Coupon } from "@/lib/db";

export async function deleteCourse(id: string) {
  const session = await mongoose.startSession();

  try {
    await ConnectToDatabase();

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Không cho phép truy cập");
    }

    if (!id) {
      throw new Error("Thiếu id khóa học");
    }

    session.startTransaction();

    // 1. Tìm khóa học
    const course = await Course.findById(id).session(session);

    if (!course) {
      throw new Error("Không tìm thấy khóa học");
    }

    // 2. Xóa khóa học khỏi danh sách courses của User
    await User.updateMany(
      {
        courses: course._id,
      },
      {
        $pull: {
          courses: course._id,
        },
      },
      {
        session,
      },
    );

    // 3. Xóa History của khóa học
    await History.deleteMany(
      {
        course: course._id,
      },
      {
        session,
      },
    );

    // 4. Xóa Coupon của khóa học
    await Coupon.deleteMany(
      {
        course: course._id,
      },
      {
        session,
      },
    );

    // 5. Xóa khóa học thật khỏi database
    await Course.deleteOne(
      {
        _id: course._id,
      },
      {
        session,
      },
    );

    // 6. Hoàn tất transaction
    await session.commitTransaction();

    // 7. Cập nhật cache
    revalidatePath("/");
    revalidatePath("/study");
    revalidatePath("/manage/course");
    revalidatePath("/manage/course/trash");
    revalidatePath("/manage/order");

    return {
      success: true,
      message: "Xóa khóa học thành công",
    };
  } catch (error) {
    await session.abortTransaction();

    console.log("❌ deleteCourse:", error);

    return {
      success: false,
      message: "Xóa khóa học thất bại",
    };
  } finally {
    await session.endSession();
  }
}
