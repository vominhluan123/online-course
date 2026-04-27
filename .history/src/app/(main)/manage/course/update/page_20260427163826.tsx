import { Heading } from "@/components/ui";

const page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("created")) {
      toast.success("Tạo khóa học thành công");
    }
  }, []);
  return <Heading>Page Update</Heading>;
};

export default page;
