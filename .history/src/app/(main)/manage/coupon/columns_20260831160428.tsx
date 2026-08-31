"use client";

import { Badge } from "@/components/ui/badge";
import { CouponConfig } from "@/constants/coupon";
import { formatPrice } from "@/lib/format-price";
import { CouponTableType } from "@/types/coupon/coupon";
import { ColumnDef } from "@tanstack/react-table";

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
    cell: ({ row }) => (
      const config = CouponConfig[row.original]
      <Badge variant={row.original.active ? "default" : "outline"}>
        {row.original.active ? "Active" : "Inactive"}
      </Badge>
    ),
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
];
