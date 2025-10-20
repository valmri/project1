const LayoutPrivate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="container lg:w-xl px-5 py-2 mx-auto"> {children}</div>
    </div>
  );
};

export default LayoutPrivate;
