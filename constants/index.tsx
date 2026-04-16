import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";
import { ComponentProps } from "react";

export const MenuLinks: {
  url: string;
  title: string;
  icon: React.ComponentType<ComponentProps<"svg">>;
}[] = [
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
