export const SectionHeader = ({ title, tagline }) => {
  return (
    <>
      <p className="uppercase text-xl tracking-widest text-[#5651e5]">
        {title}
      </p>
      <h2 className="py-4">{tagline}</h2>
    </>
  );
};
