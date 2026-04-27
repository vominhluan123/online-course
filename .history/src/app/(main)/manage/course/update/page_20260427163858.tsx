import { Heading } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const page = () => {
  const searchParams = useSearchParams();

 
  return <Heading>Page Update</Heading>;
};

export default page;
