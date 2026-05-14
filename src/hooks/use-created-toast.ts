"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function useCreatedToast(isCreated: boolean, pathname: string) {
  const router = useRouter();

  useEffect(() => {
    if (!isCreated) return;

    toast.success("Tạo khoá học thành công");

    router.replace(pathname, {
      scroll: false,
    });
  }, [isCreated, pathname, router]);
}
