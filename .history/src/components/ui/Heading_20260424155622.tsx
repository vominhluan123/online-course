const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="pt-5 font-heading font-bold text-2xl lg:text-3xl">
      {children}
    </h2>
  );
};

export default Heading;
