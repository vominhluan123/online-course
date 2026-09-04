"use client";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteCoupon } from "@/actions/coupon/delete-coupont";
import { CouponTableType } from "@/types/coupon/coupon";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

type CouponRowActionProps = {
  coupon: CouponTableType;
};

const CouponRowAction = ({ coupon }: CouponRowActionProps) => {
  const [loading, startTransition] = useTransition();
  const handleDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteCoupon(coupon.code);
        if (!result?.success) {
          toast.error("Xóa coupon thất bại");
          return;
        }
        toast.success("Xóa coupon thành công");
      } catch (error) {
        console.log(error);
        toast.error("Đã xảy ra lỗi");
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Mở hành động</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={`/manage/coupon/${coupon.code}/edit`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Cập nhật
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onSelect={(e) => e.preventDefault()}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Xóa
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialog>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa coupon?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này không thể hoàn tác. Khóa học sẽ bị xóa vĩnh viễn.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Hủy</AlertDialogCancel>
            <AlertDialogAction
              disabled={loading}
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              {loading ? "Đang xóa..." : "Xóa coupon"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
    </DropdownMenu>
      </AlertDialog>
  );
};

export default CouponRowAction;
