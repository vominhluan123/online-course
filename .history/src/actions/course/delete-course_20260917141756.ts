"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

import {
  ConnectToDatabase,
  Course,
  Coupon,
  History,
  Lecture,
  Lesson,
  User,
} from "@/lib/db";

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

    // Bắt đầu transaction
    session.startTransaction();

    // ==========================================
    // 1. Tìm khóa học
    // ==========================================

    const course = await Course.findById(id).session(session);

    if (!course) {
      throw new Error("Không tìm thấy khóa học");
    }

    // ==========================================
    // 2. Lấy danh sách Lecture của khóa học
    // ==========================================

    const lectures = await Lecture.find({
      course: course._id,
    })
      .select("_id")
      .session(session);

    const lectureIds = lectures.map((lecture) => lecture._id);

    // ==========================================
    // 3. Lấy danh sách Lesson của khóa học
    // ==========================================

    const lessons = await Lesson.find({
      course: course._id,
    })
      .select("_id")
      .session(session);

    const lessonIds = lessons.map((lesson) => lesson._id);

    // ==========================================
    // 4. Xóa Course khỏi User.courses
    // ==========================================

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

    // ==========================================
    // 5. Xóa các Lesson của Course khỏi
    //    User.completedLessons
    // ==========================================

    if (lessonIds.length > 0) {
      await User.updateMany(
        {
          completedLessons: {
            $in: lessonIds,
          },
        },
        {
          $pull: {
            completedLessons: {
              $in: lessonIds,
            },
          },
        },
        {
          session,
        },
      );
    }

    // ==========================================
    // 6. Xóa History của khóa học
    // ==========================================

    await History.deleteMany(
      {
        course: course._id,
      },
      {
        session,
      },
    );

    // ==========================================
    // 7. Vô hiệu hóa Coupon của khóa học
    //
    // Không xóa Coupon để giữ lịch sử Order.
    // ==========================================

    await Coupon.updateMany(
      {
        course: course._id,
      },
      {
        $set: {
          active: false,
          _destroy: true,
        },
      },
      {
        session,
      },
    );

    // ==========================================
    // 8. Xóa Lesson
    // ==========================================

    await Lesson.deleteMany(
      {
        course: course._id,
      },
      {
        session,
      },
    );

    // ==========================================
    // 9. Xóa Lecture
    // ==========================================

    await Lecture.deleteMany(
      {
        course: course._id,
      },
      {
        session,
      },
    );

    // ==========================================
    // 10. Xóa Course
    // ==========================================

    await Course.deleteOne(
      {
        _id: course._id,
      },
      {
        session,
      },
    );

    // ==========================================
    // 11. Tất cả thành công → lưu thay đổi
    // ==========================================

    await session.commitTransaction();

    // ==========================================
    // 12. Refresh cache
    // ==========================================

    revalidatePath("/");
    revalidatePath("/study");
    revalidatePath("/manage/course");
    revalidatePath("/manage/course/trash");
    revalidatePath("/manage/order");
    revalidatePath("/manage/coupon");

    return {
      success: true,
      message: "Xóa khóa học thành công",
    };
  } catch (error) {
    // Có lỗi → hoàn tác toàn bộ
    await session.abortTransaction();

    console.log("❌ deleteCourse:", error);

    return {
      success: false,
      message: "Xóa khóa học thất bại",
    };
  } finally {
    // Đóng session
    await session.endSession();
  }
}
