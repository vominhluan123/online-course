{
  accessorKey: "title",
  header: "Tên khoá học",
},
{
  id: "actions",
  cell: ({ row }) => (
    <TrashCourseDropdown
      course={row.original}
    />
  ),
}