import { cancelOrder } from "@/actions/order/cancel-order";
import { OrderTableType } from "@/types/order";
import { CheckCheck, MoreHorizontal, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
type Props = {
  order: OrderTableType;
};
const OrderRowAction = ({ order }: Props) => {
  const router = useRouter();
  const [loading, startTransition] = useTransition();
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
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Hành động</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <CheckCheck />
          Duyệt đơn hàng
        </DropdownMenuItem>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              className="text-destructive
                focus:text-destructive"
              onSelect={(event) => event.preventDefault()}
            >
              <CircleX className="mr-2 h-4 w-4" />
              Hủy đơn hàng
            </DropdownMenuItem>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Hủy đơn hàng?</AlertDialogTitle>

              <AlertDialogDescription>
                Đơn hàng {order.code} sẽ được chuyển sang trạng thái đã hủy. Bạn
                vẫn có thể xem lại đơn hàng này sau này.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel disabled={loading}>Không</AlertDialogCancel>

              <AlertDialogAction
                disabled={loading}
                onClick={handleCancel}
                className="bg-destructive hover:bg-destructive/90"
              >
                {loading ? "Đang hủy..." : "Hủy đơn hàng"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderRowAction;
