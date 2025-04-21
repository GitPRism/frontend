import PortfolioCard from "./PortfolioCard";

function MyPortfolio() {
  // 임시 데이터 예시
  const portfolioList = [
    {
      title: "프론트엔드 포트폴리오",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      viewCount: 15,
      date: "25년 4월 20일",
      likes: 120,
      comments: 10,
      bookmarks: 4,
    },
    {
      title: "프론트엔드 포트폴리오",
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      viewCount: 15,
      date: "25년 4월 20일",
      likes: 120,
      comments: 10,
      bookmarks: 4,
    },
  ];

  return (
    <section>
      <h1 className="text-xl">내 포트폴리오</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-7 p-2">
        {portfolioList.map((portfolio, idx) => (
          <PortfolioCard key={idx} {...portfolio} />
        ))}
      </ul>
    </section>
  );
}

export default MyPortfolio;
