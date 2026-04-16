import { ComponentProps } from "react";

type ActieveLink = {
  url: string;
  children: React.ReactNode;
};
type MenuLinkProps = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};
type PathNameLink = {
  url: string;
  title: string;
  icon: React.ComponentType<ComponentProps<"svg">>;
};
export { ActieveLink, MenuLinkProps, PathNameLink };
