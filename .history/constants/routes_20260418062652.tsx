import { IconExplore, IconPlay } from "@/components/icons";
import { PathNameLink } from "@/components/types";

export const MenuLinks: PathNameLink[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: IconPlay,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: IconExplore,
  },
  {
    url: "/manage/course",
    title: "Quản lý khoá học",
    icon: Icon,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: IconExplore,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: IconExplore,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: IconExplore,
  },
];
