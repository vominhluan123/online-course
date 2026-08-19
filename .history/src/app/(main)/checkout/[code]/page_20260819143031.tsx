import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = ({ param }: { param: { code: string } }) => {
  const checkoutDetails = await getCheckout{};
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
