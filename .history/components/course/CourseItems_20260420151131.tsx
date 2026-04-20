import Image from "next/image";
import Link from "next/link";

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
      <div className="py-4">
        <p className="text-muted-foreground font-b">Khoá học Nextjs</p>
      </div>
    </div>
  );
};

export default CourseItems;
