interface BookmarkListProps {
  title: string;
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

const BookmarkList = ({ title, items, renderItem }: BookmarkListProps) => {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="p-2">
        <ul className="flex flex-col p-4 rounded-lg">
          {items.map((item, index) => renderItem(item, index))}
        </ul>
      </div>
    </section>
  );
};

export default BookmarkList;
