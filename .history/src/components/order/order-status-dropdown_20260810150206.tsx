"use client";
import { OrderStatusConfig } from "@/constants";
import { OrderStatus, OrderTableType } from "@/types/order";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cancelOrder } from "@/actions/order/cancel-order";
type Props = {
  order: OrderTableType;
};

const statuses = [OrderStatus.CANCELLED, OrderStatus.PAID, OrderStatus.PENDING];
const OrderStatusDropdown = ({ order }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();

  const currentConfig = OrderStatusConfig[order.status];

  const handleCancel = async () => {
    startTransition(async () => {
      try {
        const result = await cancelOrder({
          id: order._id,
        });

        if (!result?.success) {
          toast.error(result?.message || "Hủy đơn hàng thất bại");
          return;
        }

        toast.success("Hủy đơn hàng thành công");
        router.refresh();
      } catch (error) {
        console.log(error);
        toast.error("Đã xảy ra lỗi");
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button disabled={loading}>
          <Badge
            variant="outline"
            className={`
              cursor-pointer
              transition
              hover:opacity-80
              ${currentConfig.className}
            `}
          >
            {loading ? "Đang cập nhật..." : currentConfig.label}
          </Badge>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center">
        {statuses.map((status) => {
          const config = OrderStatusConfig[status];

          return (
            <DropdownMenuItem
              key={status}
              onClick={() => handleUpdateStatus(status)}
            >
              <Badge variant="outline" className={config.className}>
                {config.label}
              </Badge>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderStatusDropdown;
