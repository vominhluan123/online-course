export async function hasCourseAccess({
  userId,
  courseId,
}: {
  userId: string;
  courseId: string;
}) {
  const user = await getUserInfo(userId);

  if (user?.role === UserRole.ADMIN) {
    return true;
  }

  const enrollment = await getEnrollment(userId, courseId);

  return !!enrollment;
}
