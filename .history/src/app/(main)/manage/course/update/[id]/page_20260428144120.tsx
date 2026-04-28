"use client";
import { CourseUpdate } from "@/components/course";
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

       router.replace(`/manage/course/update/${id}`);
    }
  }, [router, searchParams,id]);

  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate />
    </>
  );
};

export default Page;
