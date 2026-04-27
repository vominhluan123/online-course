"use client";

import { Heading } from "@/components/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const hasShown = useRef(false);
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("created") && !hasShown.current) {
      toast.success("Tạo khóa học thành công");
      hasShown.current = true;

      router.replace("/manage/course/update"); 
    }
  }, [searchParams]);

  return <Heading>Page Update</Heading>;
};

export default Page;
