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
type Props = {
  order: OrderTableType;
};

const statuses = [
  OrderStatus.PENDING,
  OrderStatus.APPROVED,
  OrderStatus.REJECTED,
];
const OrderStatusDropdown = ({ order }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();

  const currentConfig = OrderStatusConfig[order?.status];

  const handleUpdateStatus = (status: OrderStatus) => {
    startTransition(async () => {
      try {
        // const result = await updateCourse({
        //   id: course._id,
        //   status,
        // });
        // if (!result?.success) {
        //   toast.error("Cập nhật trạng thái thất bại");
        //   return;
        // }
        // toast.success("Cập nhật trạng thái thành công");
        // router.refresh();
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
