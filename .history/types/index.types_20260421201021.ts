import { ComponentProps } from "react";

export type ActieveLink = {
  url: string;
  children: React.ReactNode;
};
export type MenuLinkProps = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};
export type PathNameLink = {
  url: string;
  title: string;
  icon: React.ComponentType<ComponentProps<"svg">>;
};
