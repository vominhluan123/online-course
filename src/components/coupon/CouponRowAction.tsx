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

import { CouponTableType } from "@/types/coupon/coupon";
import Link from "next/link";

type CouponRowActionProps = {
  coupon: CouponTableType;
};

const CouponRowAction = ({ coupon }: CouponRowActionProps) => {
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
        <DropdownMenuItem asChild>
          <Link
            href={`/manage/coupon/${coupon._id}/edit`}
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
