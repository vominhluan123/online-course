"use client";

import { BookOpen, Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

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

import { CourseTableType } from "@/types/course/course-table";
import { useTransition } from "react";

type Props = {
  course: CourseTableType;
};

const CourseRowAction = ({ course }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();
  const handleDelete = async () => {
    console.log(course._id);
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
              focus-visible:ring-0
              focus-visible:ring-offset-0
            "
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Hành động</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href={`/course/${course.slug}`} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Xem khóa học
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/manage/course/update/${course._id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Chỉnh sửa
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/manage/course/content/${course._id}`}>
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
          <AlertDialogCancel>Hủy</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90"
          >
            Xóa khóa học
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CourseRowAction;
