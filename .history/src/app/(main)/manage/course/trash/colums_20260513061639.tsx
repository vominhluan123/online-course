"use client";

import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CourseTableCourseTrashTypeType>[] = [
  {
    accessorKey: "title",
    header: "Tên khoá học",
  },
  {
    id: "actions",
    cell: ({ row }) => <TrashCourseDropdown course={row.original} />,
  },
];
