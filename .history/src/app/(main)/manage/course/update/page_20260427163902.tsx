import { Heading } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
const searchParams = useSearchParams();

useEffect(() => {
  if (searchParams.get("created")) {
    toast.success("Tạo khóa học thành công");
  }
}, []);
const page = () => {

 
  return <Heading>Page Update</Heading>;
};

export default page;
