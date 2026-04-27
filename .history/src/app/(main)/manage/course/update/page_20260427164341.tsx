"use client";

import { Heading } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
const router = useRouter();
  useEffect(() => {
    if (searchParams.get("created")) {
      toast.success("Tạo khóa học thành công");
    }
  }, [searchParams]);

  return <Heading>Page Update</Heading>;
};

export default Page;
