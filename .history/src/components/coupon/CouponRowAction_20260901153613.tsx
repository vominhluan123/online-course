"use client";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CouponTableType } from "@/types/coupon/coupon";

type CouponRowActionProps = {
  coupon: CouponTableType;
};

const CouponRowAction = ({ coupon }: CouponRowActionProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/manage/coupon/${coupon._id}/edit`);
  };

  const handleDelete = () => {
    console.log("Xóa coupon:", coupon._id);
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
        <DropdownMenuItem onClick={handleEdit} t>
          <Pencil className="mr-2 h-4 w-4" />
          Cập nhật
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={handleDelete}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Xóa
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CouponRowAction;
