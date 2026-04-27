import { Heading } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
const searchParams = useSearchParams();

const page = () => {
  useEffect(() => {
    if (searchParams.get("created")) {
      toast.success("Tạo khóa học thành công");
    }
  }, []);

  return <Heading>Page Update</Heading>;
};

export default page;
