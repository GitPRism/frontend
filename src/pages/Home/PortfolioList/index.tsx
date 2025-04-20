import Card from "./Card";

type Portfolio = {
  id: number;
  title: string;
  badgeRank: number;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount: number;
  likeCount: number;
};

interface PortfolioListProps {
  title: string;
  data: Portfolio[];
  showRank?: boolean;
}

function PortfolioList({ title, data }: PortfolioListProps) {
  return (
    <section className="p-4">
      <h1 className="text-xl">{title}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-2 max-w-screen-xl mx-auto">
        {data.map((item, index) => (
          <li key={item.id}>
            <Card
              title={item.title}
              badgeRank={item.badgeRank}
              imageUrl={item.imageUrl}
              avatarUrl={item.avatarUrl}
              description={item.description}
              meta={item.meta}
              bookmarkCount={item.bookmarkCount}
              likeCount={item.likeCount}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PortfolioList;
