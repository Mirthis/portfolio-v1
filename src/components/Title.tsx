const Title = ({
  text,
  variant = "section",
  className,
}: {
  text: string;
  variant?: "page" | "section";
  className?: string;
}) => {
  return (
    <>
      {variant === "page" && <h1>{text}</h1>}
      {variant === "section" && (
        <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center">
          {text}
        </h2>
      )}
    </>
  );
};

export default Title;
