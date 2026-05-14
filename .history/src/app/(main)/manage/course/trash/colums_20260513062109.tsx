"use client";

import { CourseTrashType } from "@/types/course";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CourseTrashType>[] = [
  {
    accessorKey: "title",
    header: "Tên khoá học",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;

      console.log(course.title);
    },
  },
];
