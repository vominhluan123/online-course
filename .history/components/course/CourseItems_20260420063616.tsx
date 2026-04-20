import Image from "next/image";

const CourseItems = () => {
  return (
    <div className="bg-card border text-card-foreground p-5 rounded-lg border-border">
      <Image
        src="https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        width={300}
        height={300}
        alt={""}
      ></Image>
    </div>
  );
};

export default CourseItems;
