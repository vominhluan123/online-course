"use client";

import { Button } from "@/components/ui/button";
import { createOrder } from "@/actions/order.action";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";

type PurchaseButtonProps = {
  courseId: string;
};

const PurchaseButton = ({ courseId }: PurchaseButtonProps) => {
  const { userId } = useAuth();

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handlePurchase = () => {
    // ======================
    // Chưa đăng nhập
    // ======================

    if (!userId) {
      toast.error("Vui lòng đăng nhập để mua khóa học.");
      return;
    }

    startTransition(async () => {
      const res = await createOrder(courseId);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);

      // Sau này chuyển sang trang thanh toán
      router.push(`/checkout/${res.order._id}`);
    });
  };

  return (
    <Button
      className="mt-8 w-full h-12"
      variant="custom"
      onClick={handlePurchase}
      disabled={isPending}
    >
      {isPending ? "Đang xử lý..." : "Mua ngay"}
    </Button>
  );
};

export default PurchaseButton;
