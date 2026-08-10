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
    header: "Thanh toán",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="space-y-1 text-sm">
          {/* Giá gốc */}
          <div className="flex justify-between text-muted-foreground">
            <span>Gốc</span>
            <span>{formatPrice(order.originalPrice)}</span>
          </div>

          {/* Sale */}
          <div className="flex justify-between text-orange-600">
            <span>Giảm giá</span>
            <span>-{formatPrice(order.originalPrice - order.salePrice)}</span>
          </div>

          {/* Voucher */}
          <div className="flex justify-between text-green-600">
            <span>Mã giảm giá</span>
            <span>
              {order.discount > 0 ? `-${formatPrice(order.discount)}` : "-"}
            </span>
          </div>
          <div className="border-t pt-1 flex justify-between font-bold">
            <span>Tổng</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "voucherCode",
    header: "Mã giảm giá",
  },{
  accessorKey: "status",
  header: "Trạng thái",
  cell: ({ row }) => {
    const config = OrderStatusConfig[row.original.status];

    return (
      <Badge
        variant="outline"
        className={config.className}
      >
        {config.label}
      </Badge>
    );
  },
},
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => <OrderRowAction order={row.original} />,
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
