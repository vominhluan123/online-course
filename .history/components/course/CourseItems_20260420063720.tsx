import Image from "next/image";
import Link from "next/link";

const CourseItems = () => {
  return (
    <div className="bg-card border text-card-foreground p-5 rounded-lg border-border">
      <Link href='#' className="b">
        <Image
          src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={200}
          alt={""}
        ></Image>
      </Link>
    </div>
  );
};

export default CourseItems;
