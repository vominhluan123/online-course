const CheckOut = async ({
  params,
}: {
  params: Promise<{ code: string }>;
}) => {
  const { code } = await params;
  const checkoutDetails = await getCheckout(code);

  return <div>THANH TOÁN</div>;
};