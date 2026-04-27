import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <h2 className={cn}>
      {children}
    </h2>
  );
};

export default Heading;
