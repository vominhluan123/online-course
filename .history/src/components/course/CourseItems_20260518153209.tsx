import { CourseSchemaType } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { IconStar } from "../icons";

const CourseItems = ({ course }: { course: CourseSchemaType }) => {
  const price = course.price;
  const salePrice = course.sale_price;

  const hasDiscount =
    typeof price === "number" &&
    typeof salePrice === "number" &&
    salePrice > 0 &&
    salePrice < price;

  const formatPrice = (value?: number) =>
    value === undefined ? "0" : value.toLocaleString("vi-VN") + " VNĐ";

  const currentPrice = hasDiscount ? salePrice : price;
  const discountPercent =
    hasDiscount && price ? Math.floor(((price - salePrice) / price) * 100) : 0;

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
          alt={course.title}
          className="object-cover"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </Link>

      <div className="pt-4 flex flex-col flex-1 min-w-0">
        <Link href={`/course/${course.slug}`} className="block">
          <h3 className="font-heading font-bold text-primary text-lg leading-snug line-clamp-2">
            {course.title}
          </h3>
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
            <IconStar className="size-4 shrink-0" />
            <span>{course.rating[0]}</span>
          </span>

          <span className="rounded-full bg-muted px-2.5 py-1">30h20p</span>
        </div>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-primary font-heading font-bold text-xl">
            {formatPrice(currentPrice)}
          </span>

          {hasDiscount && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(price)}
              </span>

              <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded">
                -{discountPercent}%
              </span>
            </>
          )}
        </div>

        <Link
          href={`/course/${course.slug}`}
          className="mt-6 flex items-center w-full justify-center rounded-lg font-semibold font-heading bg-primary text-primary-foreground h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
};

export default CourseItems;
