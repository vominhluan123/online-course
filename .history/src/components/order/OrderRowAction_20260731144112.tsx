import { OrderTableType } from "@/types/order";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { AlertDialog } from "../ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
type Props = {
  order: OrderTableType;
};
const OrderRowAction = ({ order }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(async () => {
      try {
        //  const result = await updateCourse({
        //    id: course._id,
        //    _destroy: true,
        //    status: CourseStatus.PENDING,
        //  });
        //  if (!result?.success) {
        //    toast.error("Xóa khóa học thất bại");
        //    return;
        //  }
        //  toast.success("Xóa khóa học thành công");
        //  router.refresh();
      } catch (error) {
        console.log(error);

        toast.error("Đã xảy ra lỗi");
      }
    });
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 border-transparent shadow-none ring-0 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Hành động</DropdownMenuLabel>

          <DropdownMenuSeparator />

         

          <DropdownMenuItem asChild>
            <Link href={`/manage/course/update/${course._id}`} target="_blank">
              <Pencil className="mr-2 h-4 w-4" />
              Chỉnh sửa
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/manage/course/content/${course._id}`} target="_blank">
              <BookOpen className="mr-2 h-4 w-4" />
              Quản lý nội dung
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              className="
                 text-destructive
                 focus:text-destructive
               "
              onSelect={(e) => e.preventDefault()}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Xóa khóa học
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xóa khóa học?</AlertDialogTitle>

          <AlertDialogDescription>
            Hành động này không thể hoàn tác. Khóa học sẽ bị xóa vĩnh viễn.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Hủy</AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90"
          >
            {loading ? "Đang xóa..." : "Xóa khóa học"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderRowAction;
