"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { toast } from "sonner";

import { updateCourse } from "@/actions/course/update-course";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CourseStatusConfig } from "@/constants";
import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";

type Props = {
  course: CourseTableType;
};

const statuses = [
  CourseStatus.PENDING,
  CourseStatus.APPROVED,
  CourseStatus.REJECTED,
];

const CourseStatusDropdown = ({ course }: Props) => {
  const router = useRouter();

  const [loading, startTransition] = useTransition();

  const currentConfig = CourseStatusConfig[course.status];

  const handleUpdateStatus = (status: CourseStatus) => {
    startTransition(async () => {
      try {
        const result = await updateCourse({
          id: course._id,
          status,
        });

        if (!result?.success) {
          toast.error("Cập nhật trạng thái thất bại");

          return;
        }

        toast.success("Cập nhật trạng thái thành công");

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
          const config = CourseStatusConfig[status];

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

export default CourseStatusDropdown;
