import { ConnectToDatabase, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { lessonId, completed } = await req.json();

  if (!lessonId || typeof completed !== "boolean") {
    return new Response("Bad Request", { status: 400 });
  }

  await ConnectToDatabase();

  await User.updateOne(
    { clerkId: userId },
    completed
      ? { $addToSet: { completedLessons: lessonId } }
      : { $pull: { completedLessons: lessonId } },
  );

  return NextResponse.json({ ok: true });
}
