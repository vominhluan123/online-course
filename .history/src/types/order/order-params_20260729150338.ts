export type CreateOrderParams = {
  code: string;
  course: string;
  user: string;
  originalPrice?: string;
  salePrice?: string;
  discount?: string;
  coupon?: string;
};
