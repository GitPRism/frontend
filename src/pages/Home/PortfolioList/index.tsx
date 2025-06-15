import Card from "./Card";

type Portfolio = {
  id: number;
  title: string;
  badgeRank?: number;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount: number;
  likeCount: number;
  username: string;
  author: string;
  updated_at: string;
  portfolioId: number;
  bookmarked: boolean;
  repoOrgAvatarUrl: string;
  liked: boolean;
};

interface PortfolioListProps {
  title: string;
  data: Portfolio[];
  showRank?: boolean;
}

function PortfolioList({ title, data, showRank }: PortfolioListProps) {
  console.log(data);
  return (
    <section>
      <h1 className="text-xl">{title}</h1>
      <div className="p-2">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 bg-section-bg rounded-lg">
            <p className="text-lg text-gray-500 mb-2">검색 결과가 없습니다</p>
            <p className="text-sm text-gray-400">다른 키워드로 검색해보세요</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mx-auto bg-section-bg rounded-lg">
            {data.map((item, index) => (
              <li key={item.id}>
                <Card
                  index={index}
                  portfolioId={item.portfolioId}
                  title={item.title}
                  badgeRank={showRank}
                  avatarUrl={item.avatarUrl}
                  repoOrgAvatarUrl={item.repoOrgAvatarUrl}
                  description={item.description}
                  userName={item.username || item.author}
                  updatedAt={item.updated_at}
                  meta={item.meta}
                  bookmarkCount={item.bookmarkCount}
                  likeCount={item.likeCount}
                  bookmarked={item.bookmarked}
                  liked={item.liked}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default PortfolioList;
