import { EmptyState } from "@/components/course";
import { IconCourse, IconPlay, IconUsers } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/services/course.service";
import { getUserInfo } from "@/lib/services/user.service";
import { CourseClient, CourseStatus } from "@/types/course";
import { UserRole } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { AlertCircle, CheckCircle, CircleX, Clock3 } from "lucide-react";
import Image from "next/image";

import { BookOpen, CirclePlay, FileText, Lock } from "lucide-react";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { userId } = await auth();
  const user = userId ? await getUserInfo(userId) : null;
  const isAdmin = user?.role === UserRole.ADMIN;
  const { slug } = await params;
  const course: CourseClient | null = await getCourseBySlug(slug);
  console.log(course.lectures);
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
  const canViewCourse = course.status === CourseStatus.APPROVED || isAdmin;

  // Chưa được duyệt
  if (!canViewCourse) {
    return (
      <EmptyState
        icon={<Clock3 className="size-8 text-yellow-500" />}
        title="Khoá học chưa được duyệt"
        description="Khoá học này hiện đang chờ xét duyệt nên chưa thể hiển thị công khai."
        buttonText="Quay lại"
        href="/"
        variant="outline"
      />
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
    <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-6 lg:gap-10 min-h-screen">
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
        <h2 className="text-xl text-primary font-bold mb-4">
          Nội dung khóa học
        </h2>

        <div className="bg-card rounded-xl border">
          <div className="p-5 border-b">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{course.lectures?.length || 0} chương</span>

              <span>
                {course.lectures?.reduce(
                  (total, lecture) => total + (lecture.lessons?.length || 0),
                  0,
                )}{" "}
                bài học
              </span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {course.lectures?.map((lecture, lectureIndex) => (
              <AccordionItem
                key={lecture._id}
                value={lecture._id}
                className="border-b last:border-b-0"
              >
                <AccordionTrigger className="px-5 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="size-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Chương {lectureIndex + 1}: {lecture.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {lecture.lessons?.length || 0} bài học
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="px-5 pb-5 space-y-3">
                    {lecture.lessons?.map((lesson, lessonIndex) => {
                      const isPreview = lesson.preview;

                      return (
                        <div
                          key={lesson._id.toString()}
                          className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3"
                        >
                          {/* LEFT */}
                          <div className="flex items-center gap-3">
                            <div className="flex size-8 items-center justify-center rounded-full border bg-background text-sm font-medium">
                              {lessonIndex + 1}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                {lesson.type === "video" ? (
                                  <CirclePlay className="size-4 text-primary" />
                                ) : (
                                  <FileText className="size-4 text-primary" />
                                )}

                                <span className="font-medium">
                                  {lesson.title}
                                </span>

                                {isPreview && (
                                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                    Preview
                                  </span>
                                )}
                              </div>

                              <p className="text-xs text-muted-foreground mt-1">
                                {lesson.duration || "10 phút"}
                              </p>
                            </div>
                          </div>

                          {/* RIGHT */}
                          {!isPreview && (
                            <Lock className="size-4 text-muted-foreground" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
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
