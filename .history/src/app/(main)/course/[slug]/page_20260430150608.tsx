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
        <h1 className="font-heading font-bold text-primary text-3xl mb-5">
          Khoá học photoshop cơ bản
        </h1>
        <h2 className="text-xl text-primary font-bold mb-2">Mô tả</h2>
        <span className="leading-normal mb-10 text-muted-foreground block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          cupiditate, recusandae quidem iste vel, laboriosam sequi vero enim
          fugit, voluptates consequuntur. Praesentium non, quasi quam sint minus
          totam inventore autem!
        </span>
        <h2 className="text-xl text-primary font-bold mb-2">Yêu cầu</h2>
        <span className="leading-normal mb-10 text-muted-foreground block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          cupiditate, recusandae quidem iste vel, laboriosam sequi vero enim
          fugit, voluptates consequuntur. Praesentium non, quasi quam sint minus
          totam inventore autem!
        </span>
        <h2 className="text-xl text-primary font-bold mb-2">Lợi ích</h2>
        <span className="leading-normal mb-10 text-muted-foreground block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          cupiditate, recusandae quidem iste vel, laboriosam sequi vero enim
          fugit, voluptates consequuntur. Praesentium non, quasi quam sint minus
          totam inventore autem!
        </span>
        <h2 className="text-xl text-primary font-bold mb-2">Q.A</h2>
        <span className="leading-normal text-muted-foreground block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          cupiditate, recusandae quidem iste vel, laboriosam sequi vero enim
          fugit, voluptates consequuntur. Praesentium non, quasi quam sint minus
          totam inventore autem!
        </span>
      </div>
      <div>
        <div className="bg-card text-card-foreground rounded-lg p-5 mt-5">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-5">
              <span className="text-muted-foreground font-semibold">
                499.000 VNĐ
              </span>
              <span className="text-muted-foreground line-through">
                699.000 VNĐ
              </span>
            </div>
            <p>a</p>
            <p>a</p>
            <p>a</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
