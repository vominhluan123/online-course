export type OrderTableType = {
  _id: string;
  code: string;
  course: string;
  email: string;
  price: number;
  action: order
  salePirce?: number;
  createdAt: Date;
};
