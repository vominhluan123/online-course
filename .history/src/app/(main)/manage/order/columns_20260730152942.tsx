"use client";

import { CourseStatusDropdown } from "@/components/course";
import CourseRowAction from "@/components/course/course-row-actions";
import { formatPrice } from "@/lib/format-price";
import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CourseTableType>[] = [
  {
    accessorKey: "code",
    header: "Mã đơn hàng",
  },
  {
    accessorKey: "title",
    header: "Khoá học",
  },
  {
    accessorKey: "email",
    header: "Thành viên",
  },
  {
    accessorKey: "price",
    header: "Số tiền",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatPrice(row.original.price || 0)}
        </div>
      );
    },
  },
  {
    accessorKey: "sale-pirce",
    header: "Mã giảm giá",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatPrice(row.original.price || 0)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => <CourseStatusDropdown course={row.original} />,
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => <CourseRowAction course={row.original} />,
  },
  {
    accessorKey: "createdAt",
    header: "Ngày Mua",
    cell: ({ row }) => {
      const date = row.original.createdAt;

      return (
        <div className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString("vi-VN")}
        </div>
      );
    },
  },
];
