import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ params }: { params: { code: string } }) => {
  const checkoutDetails = await getCheckout(params.code);
  console.log("🚀 ~ CheckOut ~ checkoutDetails:", checkoutDetails);
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
