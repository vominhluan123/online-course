"use client";

import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CourseTableType>[] = [
  {
    accessorKey: "thông tin",
    header: "Thông tin",
  },
  {
    accessorKey: "giá",
    header: "Giá",
  },
  {
    accessorKey: "trạng thái",
    header: "Trạng thái",
  },
  {
    accessorKey: "hành động",
    header: "Hành động",
  },
  {
    accessorKey: "image",
    header: "Ảnh",
    cell: ({ row }) => {
      return <img src={row.original.image} className="w-20 rounded-md" />;
    },
  },
];
