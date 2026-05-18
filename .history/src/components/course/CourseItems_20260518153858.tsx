import { CourseSchemaType } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { IconStar } from "../icons";

const CourseItems = ({ course }: { course: CourseSchemaType }) => {
  const CourseInfo = [
    {
      title: course.rating[0],
      icon: (className?: string) => <IconStar className={className}></IconStar>,
    },
  ];
  const price = course.price;
  const salePrice = course.sale_price;

  const hasDiscount =
    typeof price === "number" &&
    typeof salePrice === "number" &&
    salePrice > 0 &&
    salePrice < price;

  const formatPrice = (value?: number) =>
    value === undefined ? "0" : value.toLocaleString("vi-VN") + " VNĐ";
  return (
    <article className="bg-card border text-card-foreground p-4 rounded-xl border-border flex flex-col h-full">
      <Link
        href={`/course/${course.slug}`}
        className="block relative aspect-video overflow-hidden rounded-lg"
      >
        <Image
          src={
            course.image
              ? `${course.image}?v=${course.updatedAt}`
              : "/no-image.png"
          }
          fill
          alt={"image-course"}
          className="object-cover"
          loading="eager"
          sizes="(max-width: 768px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
        />
        {/* <span className="absolute right-3 top-3 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs">
          new
        </span> */}
      </Link>
      <div className="pt-4 flex flex-col flex-1 min-w-0">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-bold text-primary font-heading text-base md:text-lg line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center gap-2">
            {CourseInfo.map((item, index) => (
              <div
                className="py-1 px-3 flex items-center gap-1 bg-accent text-accent-foreground rounded-full"
                key={index}
              >
                {item.icon("size-4")}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm py-1 text-muted-foreground px-3 bg-muted rounded-full">
            30h20p
          </span>
          <div className="flex flex-col items-end sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-primary font-bold text-lg font-heading">
              {formatPrice(hasDiscount ? salePrice : price)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(price)}
                </span>

                <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded">
                  -{Math.floor(((price - salePrice) / price) * 100)}%
                </span>
              </>
            )}
          </div>
        </div>
        <Link
          href={`/course/${course.slug}`}
          className="flex items-center w-full justify-center mt-10 rounded-lg font-semibold font-heading bg-primary text-primary-foreground className="h-10 md:h-12""
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
};

export default CourseItems;
