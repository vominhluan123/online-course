const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <h2 className="">
      {children}
    </h2>
  );
};

export default Heading;
