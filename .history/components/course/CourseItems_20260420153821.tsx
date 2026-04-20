import Image from "next/image";
import Link from "next/link";
import { IconStar } from "../icons";

const CourseItems = () => {
  return (
    <div className="bg-card border text-card-foreground p-4 rounded-2xl border-border">
      <Link href="#" className="block relative aspect-video">
        <Image
          src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          fill
          alt={""}
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
        />
        <span className="absolute right-3 top-3 bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs">
          new
        </span>
      </Link>
      <div className="py-4 text-muted-foreground">
        <div className="flex  gap-1 items-center justify-end">
          <div className="py-1 px-2 bg-accent">
            <IconStar className="size-4"></IconStar>
            <span>5.0</span>
          </div>
        </div>
        <p className="font-bold text-lg mb-5">Khoá học Nextjs</p>
        <div className="flex items-center justify-between">
          <span className="text-sm py-1 px-3 bg-accent rounded-full">
            30h20p
          </span>
          <span className="text-primary font-semibold font-heading">
            78.000 VND
          </span>
        </div>
        <Link
          href="#"
          className="flex items-center w-full justify-center mt-10 rounded-lg font-semibold font-heading bg-primary text-primary-foreground h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItems;
