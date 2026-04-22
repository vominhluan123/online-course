import {
  IconComment,
  IconCourse,
  IconExplore,
  IconOrder,
  IconPlay,
  IconUsers,
} from "@/components/icons";

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
    icon: IconCourse,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: IconUsers,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: IconOrder,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: IconComment,
  },
];
