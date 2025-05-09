function PortfolioContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 mt-4 flex flex-col gap-3 text-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <pre className="leading-8 whitespace-pre-wrap rounded text-base">
        {description}
      </pre>
    </div>
  );
}

export default PortfolioContent;
