"use client";

import CourseRowAction from "@/components/course/course-row-actions";
import { Badge } from "@/components/ui/badge";
import { courseStatusConfig } from "@/constants/course";
import { formatPrice } from "@/lib/format-price";
import { CourseStatus } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

export const columns: ColumnDef<CourseTableType>[] = [
  {
    accessorKey: "image",
    header: "Ảnh",
    cell: ({ row }) => {
      return (
        <div className="relative w-40 h-24">
          <Image
            src={row.original.image || "/no-image.png"}
            alt={row.original.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Thông tin",
  },
  {
    accessorKey: "price",
    header: "Giá",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatPrice(row.original.price || 0)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
      const course = row.original;

      const config = courseStatusConfig[course.status];

      const router = useRouter();

      const [loading, startTransition] = useTransition();

      const handleToggleStatus = () => {
        let nextStatus: CourseStatus;

        switch (course.status) {
          case CourseStatus.PENDING:
            nextStatus = CourseStatus.APPROVED;
            break;

          case CourseStatus.APPROVED:
            nextStatus = CourseStatus.REJECTED;
            break;

          default:
            nextStatus = CourseStatus.PENDING;
        }

        startTransition(async () => {
          const result = await updateCourse({
            id: course._id,
            status: nextStatus,
          });

          if (!result?.success) {
            toast.error("Cập nhật trạng thái thất bại");
            return;
          }

          toast.success("Cập nhật trạng thái thành công");

          router.refresh();
        });
      };

      return (
        <button disabled={loading} onClick={handleToggleStatus}>
          <Badge
            variant="outline"
            className={`
          cursor-pointer
          transition
          hover:opacity-80
          ${config.className}
        `}
          >
            {loading ? "Đang cập nhật..." : config.label}
          </Badge>
        </button>
      );
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => <CourseRowAction course={row.original} />,
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
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
