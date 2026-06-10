export async function hasCourseAccess({
  userId,
  courseId,
}: {
  userId: string;
  courseId: string;
}) {
  const user = await getUser(userId);

  if (user.role === "admin") {
    return true;
  }

  const enrollment = await getEnrollment(userId, courseId);

  return !!enrollment;
}
