"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { toast } from "sonner";

const CourseUpdate = ({ course }: { course: any }) => {
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
      {/* render form + data course ở đây */}
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
};

export default CourseUpdate;
