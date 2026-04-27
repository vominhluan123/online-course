import { Heading } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
 useEffect(() => {
   if (searchParams.get("created")) {
     toast.success("Tạo khóa học thành công");
   }
 }, []);
const page = () => {
  const searchParams = useSearchParams();

 
  return <Heading>Page Update</Heading>;
};

export default page;
