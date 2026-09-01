"use client";

import CouponRowAction from "@/components/coupon/CouponRowAction";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CouponConfig } from "@/constants/coupon";
import { formatPrice } from "@/lib/format-price";
import { CouponTableType } from "@/types/coupon/coupon";
import { getCouponStatus } from "@/utils/coupon-status";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

const formatCouponValue = (type: CouponTableType["type"], value: number) => {
  if (type === "percent") return `${value}%`;

  return formatPrice(value);
};

export const columns: ColumnDef<CouponTableType>[] = [
  {
    accessorKey: "title",
    header: "Thông tin",
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="font-medium">{row.original.title}</div>
        <div className="text-xs text-muted-foreground">
          {row.original.courseTitle}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => (
      <span className="rounded-md border bg-muted px-2 py-1 font-mono text-xs font-medium">
        {row.original.code}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: "Loại",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.type === "percent" ? "Phần trăm" : "Giá tiền"}
      </Badge>
    ),
  },
  {
    accessorKey: "value",
    header: "Giá trị",
    cell: ({ row }) => (
      <div className="font-medium">
        {formatCouponValue(row.original.type, row.original.value)}
      </div>
    ),
  },
  {
    accessorKey: "active",
    header: "Trạng thái",
    cell: ({ row }) => {
      const coupon = row.original;

      const status = getCouponStatus(
        coupon.active,
        coupon.startDate,
        coupon.endDate,
      );

      const config = CouponConfig[status];

      return (
        <Badge variant="outline" className={config.className}>
          <span
            className={`mr-1.5 h-2 w-2 rounded-full ${config.dotClassName}`}
          />

          {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "usedCount",
    header: "Đã dùng",
    cell: ({ row }) => (
      <div className="text-sm">
        {row.original.usedCount}/{row.original.maxUses}
      </div>
    ),
  },
  {
    accessorKey: "endDate",
    header: "Thời gian",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {new Date(row.original.startDate).toLocaleDateString("vi-VN")} -{" "}
        {new Date(row.original.endDate).toLocaleDateString("vi-VN")}
      </div>
    ),
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => {
      <CouponRowAction coupon={row.original} />;
    },
  },
];
