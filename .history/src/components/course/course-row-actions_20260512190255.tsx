
const CourseRowAction = () => {
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
          <Link href={`/manage/course/update/${course._id}`} target="_blank">
            <Pencil className="mr-2 h-4 w-4" />
            Chỉnh sửa
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href={`/manage/course/status/${course._id}`} target="_blank">
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
};

export default CourseRowAction;
