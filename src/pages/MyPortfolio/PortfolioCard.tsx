import Button from "@/components/common/Button";

type PortfolioCardProps = {
  title: string;
  imageUrl: string;
  viewCount: number;
  date: string;
  likes: number;
  comments: number;
  bookmarks: number;
};

function PortfolioCard({
  title,
  imageUrl,
  viewCount,
  date,
  likes,
  comments,
  bookmarks,
}: PortfolioCardProps) {
  return (
    <li className="p-4 flex flex-col justify-between items-start bg-section-bg rounded-xl">
      <figure className="aspect-[7/6] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="w-full p-1 mt-2 flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-lg">{title}</p>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 h-full">
              메뉴 버튼
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>수정하기</a>
              </li>
              <li>
                <a>삭제하기</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-myportfolio-text-sub">
          {viewCount}회 · {date}
        </p>
        <div className="flex gap-2 mt-1">
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            저장
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            좋아요 {likes}
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            댓글 {comments}
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            북마크 {bookmarks}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default PortfolioCard;
