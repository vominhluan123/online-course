import Heading from "@/components/ui/Heading";

export default async function Home() {
  return (
    <div className="p-5">
      <Heading>Khám phá</Heading>
      <div className="course grid grid-cols-3 gap-8"></div>
    </div>
  );
}
