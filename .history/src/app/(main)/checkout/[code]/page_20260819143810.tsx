import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ params }: { params: { code: string } }) => {
  const checkoutDetails = await getCheckout(params.code);
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
