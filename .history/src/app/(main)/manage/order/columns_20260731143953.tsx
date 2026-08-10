"use client";
import OrderStatusDropdown from "@/components/order/order-status-dropdown";
import OrderRowAction from "@/components/order/OrderRowAction";
import { formatPrice } from "@/lib/format-price";
import { OrderTableType } from "@/types/order/order-table";
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
    accessorKey: "user",
    header: "Email",
  },
  {
    accessorKey: "total",
    header: "Số tiền",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatPrice(row.original.total || 0)}
        </div>
      );
    },
  },
  {
    accessorKey: "voucherCode",
    header: "Mã giảm giá",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => <OrderStatusDropdown order={row.original} />,
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => <OrderRowAction o />,
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
