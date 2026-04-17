import {
  IconExplore,
  IconOrder,
  IconPlay,
  IconUsers,
  IconComment,
  IconCourse,
} from "@/components/icons";
import IconComment from "@/components/icons/IconComment";
import IconCourse from "@/components/icons/IconCourse";
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
