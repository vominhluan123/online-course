import { IconCourse, IconPlay, IconUsers } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/services/course.service";
import { CourseClient, CourseStatus } from "@/types/course";
import { AlertCircle, CheckCircle, CircleX, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const course: CourseClient | null = await getCourseBySlug(slug);

  // Không tìm thấy khoá học
  if (!course) {
    return (
      <EmptyState
        icon={<CircleX className="size-8 text-destructive" />}
        title="Không tìm thấy khoá học"
        description="Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại."
        buttonText="Quay về trang chủ"
        href="/"
        variant="destructive"
      />
    );
  }

  // Chưa được duyệt
  if (course.status !== CourseStatus.APPROVED) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md w-full bg-card border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-5">
            <Clock3 className="size-8 text-yellow-500" />
          </div>

          <h1 className="text-2xl font-bold mb-3">Khoá học chưa được duyệt</h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Khoá học này hiện đang chờ xét duyệt nên chưa thể hiển thị công
            khai.
          </p>

          <Button asChild variant="outline">
            <Link href="/">Quay lại</Link>
          </Button>
        </div>
      </div>
    );
  }
  const getEmbedUrl = (url: string) => {
    try {
      const youtubeUrl = new URL(url);
      const videoId = youtubeUrl.searchParams.get("v");

      if (!videoId) return "";

      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return "";
    }
  };
  const price = course.price;
  const salePrice = course.sale_price;
  const hasDiscount =
    price !== undefined &&
    salePrice !== undefined &&
    salePrice > 0 &&
    salePrice < price;
  const formatPrice = (value?: number, fallback = "") =>
    value === undefined ? fallback : value.toLocaleString("vi-VN") + " VNĐ";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6 lg:gap-10 min-h-screen">
      <div>
        <div className="aspect-video relative max-w-5xl mt-5 mb-5">
          {course.intro_url ? (
            <iframe
              src={getEmbedUrl(course.intro_url)}
              className="w-full h-full rounded-lg object-fill"
              allowFullScreen
            />
          ) : course.image ? (
            <Image
              src={course.image}
              fill
              alt={course.title}
              className="object-cover rounded-lg"
              loading="eager"
            />
          ) : (
            <Image
              src="/no-image.png"
              fill
              alt="no image"
              className="object-cover rounded-lg"
            />
          )}
        </div>
        <h1 className="font-heading font-bold text-primary text-3xl mb-5">
          {course.title}
        </h1>
        <h2 className="text-xl text-primary font-bold mb-2">Mô tả</h2>
        <span className="leading-normal mb-10 text-muted-foreground block">
          {course.desc}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          <div className="bg-card text-card-foreground rounded-lg p-5">
            <h4 className="text-sm">Bài học</h4>
            <h3 className="font-bold">100</h3>
          </div>
          <div className="bg-card text-card-foreground rounded-lg p-5">
            <h4 className="text-sm">Lượt xem</h4>
            <h3 className="font-bold">100</h3>
          </div>
          <div className="bg-card text-card-foreground rounded-lg p-5">
            <h4 className="text-sm">Thời lượng</h4>
            <h3 className="font-bold">100</h3>
          </div>
        </div>
        <h2 className="text-xl text-primary font-bold mb-2">Yêu cầu</h2>
        <ul className="space-y-2 mb-10 text-muted-foreground">
          {course.info?.requirements?.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <AlertCircle className="size-4 mt-1 text-yellow-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl text-primary font-bold mb-2">Lợi ích</h2>
        <ul className="space-y-2 mb-10 text-muted-foreground">
          {course.info?.benefits?.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="size-4 mt-1 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="bg-card text-card-foreground rounded-lg p-5 mt-5">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 mb-5 items-center">
              <span className="text-muted-foreground font-semibold text-xl">
                {formatPrice(hasDiscount ? salePrice : price)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-muted-foreground line-through text-sm">
                    {formatPrice(price)}
                  </span>
                  <strong className="ml-auto text-muted-foreground font-semibold text-sm px-3 py-1 bg-muted inline-block rounded-lg">
                    {Math.round(((price - salePrice) / price) * 100)}%
                  </strong>
                </>
              )}
            </div>
            <div className="space-y-5">
              <p className="flex gap-2 items-start text-muted-foreground">
                <IconPlay className="size-5 shrink-0"></IconPlay>
                <span>Video quay full HD</span>
              </p>
              <p className="flex gap-2 items-center text-muted-foreground">
                <IconUsers className="size-5 shrink-0"></IconUsers>
                <span>Hỗ trợ trong quá trình học</span>
              </p>
              <p className="flex gap-2 items-center text-muted-foreground">
                <IconCourse className="size-5 shrink-0"></IconCourse>
                <span>Có tài liệu kèm theo</span>
              </p>
            </div>
          </div>
          <Button className="mt-8 w-full h-12" variant={"custom"} type="submit">
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
