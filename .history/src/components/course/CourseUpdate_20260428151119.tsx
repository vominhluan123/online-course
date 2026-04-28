"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const CourseUpdate = ({ course }: { course: unknown }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
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
    <div>
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
};

export default CourseUpdate;
