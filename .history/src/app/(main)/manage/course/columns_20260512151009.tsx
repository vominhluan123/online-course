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
import { Eye, MoreHorizontal, Pencil, RefreshCcw, Trash2 } from "lucide-react";

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
    cell: ({ row }) => {
      const price = row.original.price || 0;

      const formattedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);

      return <div className="font-medium">{formattedPrice}</div>;
    },
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
            <Button
              variant="ghost"
              className="h-8 w-8 p-0
    border-transparent
    shadow-none
    ring-0
    outline-none
    focus:border-transparent
    focus:outline-none
    focus:ring-0
    focus-visible:border-transparent
    focus-visible:outline-none
    focus-visible:ring-0
    focus-visible:ring-offset-0
    data-[state=open]:bg-muted"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hành động</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Xem khóa học
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Chỉnh sửa
            </DropdownMenuItem>

            <DropdownMenuItem>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Cập nhật trạng thái
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Xóa khóa học
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
