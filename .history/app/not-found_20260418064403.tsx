import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mb-5">
      <h1 className="font-heading mb-5">404 - Không tìm thấy trang</h1>
      <p className="font-body">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link href="/">Trở về trang chủ</Link>
    </div>
  );
};

export default Custom404;
