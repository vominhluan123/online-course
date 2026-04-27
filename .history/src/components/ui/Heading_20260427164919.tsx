const Heading = ({ children, className: '' }: { children: React.ReactNode, className: string }) => {
  return (
    <h2 className="pt-5 font-heading font-bold text-2xl lg:text-3xl">
      {children}
    </h2>
  );
};

export default Heading;
