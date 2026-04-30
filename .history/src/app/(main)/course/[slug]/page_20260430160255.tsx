import { IconCourse, IconPlay, IconUsers } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/services/course.service";
import { CourseClient } from "@/types/course";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const course: CourseClient | null = await getCourseBySlug(slug);
  console.log("🚀 ~ page ~ course:", course);
  if (!course) {
    return <div>Không tìm thấy khoá học</div>;
  }
  const getEmbedUrl = (url: string) => {
    const id = url.split("v=")[1];
    return `https://www.youtube.com/embed/${id}`;
  };
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div>
        <div className="aspect-video relative max-w-5xl mt-5 mb-5">
          {course.image ? (
            <Image
              src={course.image}
              fill
              alt={course.title}
              className="object-cover rounded-lg"
              loading="eager"
            />
          ) : course.intro_url ? (
            <iframe
              src={getEmbedUrl(course.intro_url)}
              className="w-full h-full rounded-lg"
              allowFullScreen
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
        <h2 className="text-xl text-primary font-bold mb-2">Yêu cầu</h2>
        <ul className="leading-normal mb-10 text-muted-foreground block">
          {course.info?.requirements?.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        <h2 className="text-xl text-primary font-bold mb-2">Lợi ích</h2>
        <ul className="leading-normal mb-10 text-muted-foreground block">
          {course.info?.benefits?.map((item: string, i: number) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
        <h2 className="text-xl text-primary font-bold mb-2">Q.A</h2>
          <ul className="leading-normal mb-10 text-muted-foreground block">
            {course.info?.qa.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
              <li></li>
            ))}
          </ul>
      </div>
      <div>
        <div className="bg-card text-card-foreground rounded-lg p-5 mt-5">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-5">
              <span className="text-muted-foreground font-semibold">
                {course.sale_price} VNĐ
              </span>
              <span className="text-muted-foreground line-through">
                {course.price} VNĐ
              </span>
            </div>
            <div className="space-y-5">
              <p className="flex gap-2 items-center text-muted-foreground">
                <IconPlay className="size-5"></IconPlay>Video quay full HD
              </p>
              <p className="flex gap-2 items-center text-muted-foreground">
                <IconUsers className="size-5"></IconUsers>Hỗ trợ trong quá trình
                học
              </p>
              <p className="flex gap-2 items-center text-muted-foreground">
                <IconCourse className="size-5"></IconCourse>Có tài liệu kèm theo
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
