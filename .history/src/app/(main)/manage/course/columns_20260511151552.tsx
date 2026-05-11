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
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
