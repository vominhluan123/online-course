"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { courseStatusConfig } from "@/constants/course";
import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal, Pencil } from "lucide-react";

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
      const config = courseStatusConfig[row.original.status];
      return (
        <Badge variant="outline" className={config.className}>
          {config.label}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: ({ row }) => {
      const course = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hành động</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Eye />
              Xem khóa học
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Pencil />
              Chỉnh sửa
            </DropdownMenuItem>

            <DropdownMenuItem>Cập nhật trạng thái</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-red-500 focus:text-red-500">
              Xóa khóa học
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
