import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10 min-h-screen">
      <div>
        <div className="aspect-video relative max-w-5xl mt-5 mb-5">
          <Image
            src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
            fill
            alt={""}
            className="object-cover rounded-lg"
            loading="eager"
            sizes="(max-width: 768px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
          />
        </div>
        <h1 className="font-heading font-bold text-xl mb-5">
          Khoá học photoshop cơ bản
        </h1>
        <div className="led"></div>
      </div>
    </div>
  );
};

export default page;
