import Link from "next/link";
import { Button } from "../ui/button";

const EmptyCourse = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-semibold">Bạn chưa có khoá học nào</h2>

      <p className="text-muted-foreground mt-2 max-w-md">
        Tạo khoá học đầu tiên để bắt đầu xây dựng nội dung học tập.
      </p>

      <Button asChild className="mt-6">
        <Link href="/manage/courses/new">Tạo khoá học</Link>
      </Button>
    </div>
  );
};

refce