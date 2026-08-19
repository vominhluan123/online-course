import { getCheckout } from "@/actions/order/checkout-order";

const CheckOut = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const checkoutDetails = await getCheckout(code);

  return (
    <div>
      Cám ơn bạn đã đặt mua khóa học <div>{checkoutDetails.course.title}</div>.
      Bạn vui lòng thanh toán vào thông tin tài khoản dưới đây với nội dung
      chuyển khoản là <div>{}</div> Số tài khoản 105003175318 Tên tài khoản Nguyen
      Tran Thao Nguyen Ngân hàng Ngân hàng Vietin Bank Số tiền cần thanh toán
      499.000 VNĐ Nếu bạn cần hỗ trợ, vui lòng liên hệ Admin qua fb cá nhân:
      Evondev
    </div>
  );
};
export default CheckOut;
