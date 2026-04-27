import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "pt-5 font-heading font-bold text-2xl lg:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
