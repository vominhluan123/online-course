import { IconExplore, IconPlay } from "@/components/icons";
import { PathNameLink } from "@/components/types";
import { ComponentProps } from "react";

export const MenuLinks: PathNameLink[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: IconPlay,
  },
  {
    url: "/explore",
    title: "Khu vực khám phá",
    icon: IconExplore,
  },
];
