import { getCheckout } from "@/actions/order/checkout-order";
import CheckoutCard from "@/components/order/CheckoutCard";

const CheckOut = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const checkoutDetails = await getCheckout(code);

  return <CheckoutCard checkoutDetails={checkoutDetails} />;
};
export default CheckOut;
