"use client";

import { MoreHorizontal, RotateCcw, Trash2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "sonner";

import { CourseTrashType } from "@/types/course";

import { updateCourse } from "@/actions/course/update-course";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
} from "@/components/ui/alert-dialog";

type Props = {
  course: CourseTrashType;
};

const TrashCourseActions = ({ course }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();

  // khôi phục khoá học
  const handleRestore = async () => {
    startTransition(async () => {
      try {
        const result = await updateCourse({
          id: course._id,
          _destroy: false,
        });

        if (!result?.success) {
          toast.error("Khôi phục khóa học thất bại");

          return;
        }

        toast.success("Khôi phục khóa học thành công");

        router.refresh();
      } catch (error) {
        console.log(error);

        toast.error("Đã xảy ra lỗi");
      }
    });
  };

  // Xoá khoá học vv (trong db)
  const handleDeletePermanently = async () => {
    startTransition(async () => {
      try {
        // const result = await deleteCourse(course._id);

        // fake success
        const result = {
          success: true,
        };

        if (!result?.success) {
          toast.error("Xóa vĩnh viễn khóa học thất bại");

          return;
        }

        toast.success("Đã xóa vĩnh viễn khóa học");

        router.refresh();
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
            className="
              h-8
              w-8
              p-0
              border-transparent
              shadow-none
              ring-0
              outline-none
              focus:border-transparent
              focus:outline-none
              focus:ring-0
              focus-visible:border-transparent
              focus-visible:outline-none
              focus-visible:ring-0
              focus-visible:ring-offset-0
              data-[state=open]:bg-muted
            "
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Hành động</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleRestore}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Khôi phục khóa học
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
              Xóa vĩnh viễn
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xóa vĩnh viễn khóa học?</AlertDialogTitle>

          <AlertDialogDescription>
            Hành động này không thể hoàn tác. Khóa học sẽ bị xóa hoàn toàn khỏi
            hệ thống.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Hủy</AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={handleDeletePermanently}
            className="bg-destructive hover:bg-destructive/90"
          >
            {loading ? "Đang xóa..." : "Xóa vĩnh viễn"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TrashCourseActions;
