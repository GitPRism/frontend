import Card from "./Card";

type Portfolio = {
  id: number;
  title: string;
  badgeRank?: number;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount: number;
  likeCount: number;
  username: string;
  updated_at: string;
  portfolioId: number;
  bookmarked: boolean;
};

interface PortfolioListProps {
  title: string;
  data: Portfolio[];
  showRank?: boolean;
}

function PortfolioList({ title, data }: PortfolioListProps) {
  console.log(data);
  return (
    <section>
      <h1 className="text-xl">{title}</h1>
      <div className="p-2">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto bg-section-bg rounded-lg">
          {data.map((item) => (
            <li key={item.id}>
              <Card
                portfolioId={item.portfolioId}
                title={item.title}
                badgeRank={item.badgeRank}
                imageUrl={item.imageUrl}
                avatarUrl={item.avatarUrl}
                description={item.description}
                userName={item.username}
                updatedAt={item.updated_at}
                meta={item.meta}
                bookmarkCount={item.bookmarkCount}
                likeCount={item.likeCount}
                bookmarked={item.bookmarked}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PortfolioList;
