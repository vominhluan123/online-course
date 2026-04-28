"use client";

import { CourseUpdate } from "@/components/course";
import { Heading } from "@/components/ui";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const hasShown = useRef(false);

  const id = params.id as string;

  useEffect(() => {
    const created = searchParams.get("created");

    if (created && !hasShown.current) {
      toast.success("Tạo khóa học thành công");
      hasShown.current = true;

      router.replace(`/manage/course/update/${id}`);
    }
  }, [searchParams, router, id]);

  return (
    <>
      <Heading className="mb-8">Cập nhật khoá học</Heading>
      <CourseUpdate />
    </>
  );
};

export default Page;
