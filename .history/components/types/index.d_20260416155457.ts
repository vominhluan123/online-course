type ActieveLink = {
  url: string;
  children: React.ReactNode;
};
type MenuLinkProps = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};
export { ActieveLink, MenuLink };
