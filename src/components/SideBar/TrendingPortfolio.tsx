function TrendingPortfolio() {
  return (
    <div className="py-2 px-1.5 text-center border-1 border-rank-border w-full">
      <p className="text-base pb-2">실시간 인기 순위</p>

      {/* 리스트 항목 */}
      <div className="flex items-center border-b border-rank-divider p-1 gap-2">
        <span className="w-4 shrink-0">1</span>
        <span
          className="flex-1 truncate text-rank-text"
          title="이번에 합격한 포트폴리오"
        >
          이번에 합격한 포트폴리오
        </span>
        <span className="max-w-[80px] truncate text-rank-text" title="Uropa0-0">
          Uropa0-0
        </span>
      </div>

      <div className="flex items-center border-b border-rank-divider p-1 gap-2">
        <span className="w-4 shrink-0">2</span>
        <span className="flex-1 truncate text-rank-text" title="포트폴리오 V2">
          포트폴리오 V2
        </span>
        <span className="max-w-[80px] truncate text-rank-text" title="Uropa">
          Uropa
        </span>
      </div>

      <div className="flex items-center border-b border-rank-divider p-1 gap-2">
        <span className="w-4 shrink-0">3</span>
        <span
          className="flex-1 truncate text-rank-text"
          title="포트폴리오 V2포트폴리오 V2포트폴리오 V2"
        >
          포트폴리오 V2포트폴리오 V2포트폴리오 V2
        </span>
        <span
          className="max-w-[60px] truncate text-rank-text"
          title="UropaUropaUropa"
        >
          UropaUropaUropa
        </span>
      </div>
    </div>
  );
}

export default TrendingPortfolio;
