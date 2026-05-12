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
import { formatPrice } from "@/lib/format-price";
import { CourseTableType } from "@/types/course/course-table";
import { ColumnDef } from "@tanstack/react-table";
import { BookOpen, Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              className="h-8 w-8 p-0 border-transparent shadow-none ring-0 outline-none focus:border-transparent focus:outline-none focus:ring-0 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:bg-muted"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hành động</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href={`/course/${course.slug}`} target="_blank">
                <Eye className="mr-2 h-4 w-4" />
                Xem khóa học
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href={`/manage/course/update/${course._id}`}
                target="_blank"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Chỉnh sửa
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href={`/manage/course/status/${course._id}`}
                target="_blank"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Quản lý nội dung
              </Link>
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
