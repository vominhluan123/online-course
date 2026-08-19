import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ params }: { params: { code: string } }) => {
  const checkoutDetails = await getCheckout(params.code);
  console.log("🚀 ~ CheckOut ~ checkoutDetails:", checkoutDetails);
  return <div>THANH TOÁN</div>;
};

export default CheckOut;
const CheckOut = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const checkoutDetails = await getCheckout(code);

  return <div>THANH TOÁN</div>;
};