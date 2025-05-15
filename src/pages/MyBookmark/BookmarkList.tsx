import BookmarkItem from "./BookmarkItem";

interface BookmarkListProps {
  title: string;
  items: BookmarkItem[];
}

const BookmarkList = ({ title, items }: BookmarkListProps) => {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="p-2">
        <ul className="flex flex-col p-4 rounded-lg">
          {items.map((item) => (
            <BookmarkItem key={item.portfolioId} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookmarkList;
