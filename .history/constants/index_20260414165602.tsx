import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";
const Icon = item.icon;
export const MenuLinks: {
  url: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    Icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Khu vực khám phá",
    Icon: <IconExplore className="size-5" />,
  },
];
