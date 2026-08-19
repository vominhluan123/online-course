import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = ({ param }: { param: { code: string } }) => {
  const checkoutDetails = await getCheckout{(
    c
  )};
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
