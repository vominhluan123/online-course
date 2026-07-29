export type CreateOrderParams = {
  code: string;
  course: string;
  user: string;
  originalPrice?: string;
  amount?: string;
  discount?: string;
  coupon?: string;
};
