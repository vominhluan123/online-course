import { getCheckout } from "@/actions/order/checkout-order";
import { CircleCheckBig, Copy } from "lucide-react";

const CheckOut = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const checkoutDetails = await getCheckout(code);

  return (
n <CheckoutCard checkoutDetails={checkoutDetails} />;
  );
};
export default CheckOut;
