import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";

export const MenuLinks: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay className="size-10" />,
  },
  {
    url: "/explore",
    title: "Khu vực khám phá",
    icon: <IconExplore className="size-5" />,
  },
];
