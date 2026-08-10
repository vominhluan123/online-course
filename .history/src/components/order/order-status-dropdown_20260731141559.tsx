const OrderStatusDropdown = () => {
  returnconst router = useRouter();
  
    const [loading, startTransition] = useTransition();
  
    const currentConfig = courseStatusConfig[course.status];
  
    const handleUpdateStatus = (status: CourseStatus) => {
      startTransition(async () => {
        try {
          const result = await updateCourse({
            id: course._id,
            status,
          });
  
          if (!result?.success) {
            toast.error("Cập nhật trạng thái thất bại");
  
            return;
          }
  
          toast.success("Cập nhật trạng thái thành công");
  
          router.refresh();
        } catch (error) {
          console.log(error);
  
          toast.error("Đã xảy ra lỗi");
        }
      });
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button disabled={loading}>
            <Badge
              variant="outline"
              className={`
                cursor-pointer
                transition
                hover:opacity-80
                ${currentConfig.className}
              `}
            >
              {loading ? "Đang cập nhật..." : currentConfig.label}
            </Badge>
          </button>
        </DropdownMenuTrigger>
  
        <DropdownMenuContent align="center">
          {statuses.map((status) => {
            const config = courseStatusConfig[status];
  
            return (
              <DropdownMenuItem
                key={status}
                onClick={() => handleUpdateStatus(status)}
              >
                <Badge variant="outline" className={config.className}>
                  {config.label}
                </Badge>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
};

export default OrderStatusDropdown;
