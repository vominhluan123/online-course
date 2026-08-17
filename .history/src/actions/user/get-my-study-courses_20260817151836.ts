"use server";

import { ConnectToDatabase, History, User } from "@/lib/db";
import { StudyCourseType } from "@/types/user";
import { auth } from "@clerk/nextjs/server";

export async function getMyStudyCourses(): Promise<StudyCourseType[]> {
  await ConnectToDatabase();

  const { userId } = await auth();

  if (!userId) return [];

  const user = await User.findOne({
    clerkId: userId,
  }).populate({
    path: "courses",
    populate: {
      path: "lectures",
      populate: {
        path: "lessons",
      },
    },
  });

  if (!user) return [];

  const histories = await History.find({
    user: user._id,
  });

  return user.courses.map((course:Cou) => {
    const firstLessonId =
      course.lectures?.[0]?.lessons?.[0]?._id?.toString() ?? "";
    const history = histories.find(
      (item) => item.course.toString() === course._id.toString(),
    );

    return {
      _id: course._id.toString(),
      course: {
        _id: course._id.toString(),
        title: course.title,
        image: course.image,
        slug: course.slug,
      },
      percent: history?.percent ?? 0,
      completed: history?.completed ?? false,
      currentLesson: history?.currentLesson ?? firstLessonId,
    };
  });
}
