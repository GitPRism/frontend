import { useState } from "react";

interface ToggleListProps {
  title: string;
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

const ToggleList = ({ title, items, renderItem }: ToggleListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 2);

  return (
    <section className="mb-8 w-full">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="p-2">
        <ul className="flex flex-col gap-4 space-y-2 bg-section-bg p-4 rounded-lg">
          {visibleItems.map((item, index) => renderItem(item, index))}
        </ul>
      </div>
      {items.length > 2 && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex items-center text-sm text-gray-500 mt-2 hover:text-black"
        >
          {isExpanded ? "접기" : "더보기"}
          {isExpanded ? (
            <div className="ml-1">위</div>
          ) : (
            <div className="ml-1">아래</div>
          )}
        </button>
      )}
    </section>
  );
};

export default ToggleList;
