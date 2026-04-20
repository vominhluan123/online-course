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
        <span className="absolute right-0 bg-accent text-accent-foreground">
          new111
        </span>
      </Link>
    </div>
  );
};

export default CourseItems;
