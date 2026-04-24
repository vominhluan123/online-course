
import { IconHome } from "@/components/icons";
import Link from "next/link";

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center space-y-6">
      {/* Title */}
      <h1 className="font-heading text-3xl md:text-4xl font-semibold">
        Bạn không có quyền truy cập
      </h1>

      {/* Description */}
      <p className="font-body text-muted-foreground max-w-md">
        Trang này chỉ dành cho quản trị viên. Nếu bạn nghĩ đây là lỗi, hãy kiểm
        tra lại tài khoản hoặc liên hệ quản trị hệ thống.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-accent transition"
        >
          <IconHome />
          Trang chủ
        </Link>

        <Link
          href="/course"
          className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90 transition"
        >
          Xem khóa học
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
