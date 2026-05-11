"use client";

import { Badge } from "@/components/ui/badge";
import { statusLabel } from "@/types/course";
import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CourseTableType>[] = [
  {
    accessorKey: "image",
    header: "Ảnh",
    cell: ({ row }) => {
      return <img src={row.original.image} className="w-20 rounded-md" />;
    },
  },
  {
    accessorKey: "title",
    header: "Thông tin",
  },
  {
    accessorKey: "price",
    header: "Giá",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
      const status = row.original.status;

      const variants = {
        APPROVED: "default",
        PENDING: "secondary",
        REJECTED: "destructive",
      } as const;

      return <Badge variant={variants[status]}>{statusLabel[status]}</Badge>;
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => {
      return <button>Edit</button>;
    },
  },
];
