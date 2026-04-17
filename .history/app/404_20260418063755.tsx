import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-heading text-7xl">404 - Không tìm thấy trang</h1>
      <p className="font-body">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link href="/">
        <a>Trở về trang chủ</a>
      </Link>
    </div>
  );
};

export default Custom404;
