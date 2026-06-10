
import { getUserInfo } from "@/lib/services/user.service";
import { UserRole } from "@/types/user";

export const isAdmin = async (userId: string) => {
  const user = await getUserInfo(userId);

  return user?.role === UserRole.ADMIN;
};
