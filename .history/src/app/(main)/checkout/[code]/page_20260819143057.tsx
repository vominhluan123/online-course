import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ param }: { param: { code: string } }) => {
  const checkoutDetails = await getCheckout({
    code = param.code,
  });
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
