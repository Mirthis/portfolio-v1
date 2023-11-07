import clsx from "clsx";

const Container = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    // TODO: limite width instead of using big padding
    <div
      className={clsx([
        "w-full h-full inline-block z-0 p-32 lg:p-16 xl:p-24 md:p-12 sm:p-8",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
