"use client";

import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";

import { formatPrice } from "@/lib/format-price";

import { CourseTrashType } from "@/types/course";
import TrashCourseActions from "@/components/course/trash-course";

export const columns: ColumnDef<CourseTrashType>[] = [
  {
    accessorKey: "image",
    header: "Ảnh",
    cell: ({ row }) => {
      const course = row.original;

      return (
        <div className="relative w-40 h-24">
          <Image
            src={course.image || "/no-image.png"}
            alt={course.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "title",
    header: "Tên khóa học",
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
    accessorKey: "createdAt",
    header: "Ngày tạo",
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground text-sm">
          {new Date(row.original.createdAt).toLocaleDateString("vi-VN")}
        </div>
      );
    },
  },
{
  accessorKey: "status",
  header: "Trạng thái",
  cell: ({ row }) => {
    return (
      <Badge>
        {row.original.status}
      </Badge>
    );
  },
}
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => {
     <TrashCourseActions course={row.original} />;
    },
  },
];
