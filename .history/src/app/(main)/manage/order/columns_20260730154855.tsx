"use client";
import OrderStatusDropdown from "@/components/order/course-status-dropdown";
import OrderRowAction from "@/components/order/OrderRowAction";
import { formatPrice } from "@/lib/format-price";
import { OrderTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<OrderTableType>[] = [
  {
    accessorKey: "code",
    header: "Mã đơn hàng",
  },
  {
    accessorKey: "course",
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
    accessorKey: "salePirce",
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
    cell: ({ row }) => <OrderStatusDropdown />,
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => <OrderRowAction />,
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
