import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ params }: { params: { code: string } }) => {
  const checkoutDetails = await getCheckout({
    code: params.,
  });
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
