"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { MoreHorizontal } from "lucide-react";

import { CourseTrashType } from "@/types/course";

type Props = {
  course: CourseTrashType;
};

const TrashCourseActions = ({ course }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();

  const handleRestore = async () => {
    console.log(course._id);
  };

  const handleDeletePermanently = async () => {
    console.log(course._id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" disabled={loading}>
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleRestore}>Khôi phục</DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleDeletePermanently}
          className="text-red-500"
        >
          Xoá vĩnh viễn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TrashCourseActions;
