import Button from "@/components/common/Button";
import { Download, Heart, MessageSquareText, Bookmark } from "lucide-react";

type PortfolioCardProps = {
  portfolio: {
    id: number;
    data: {
      title: string;
      imageUrl: string;
      viewCount: number;
      createdAt: string;
      likeCount: number;
      contentCount: number;
      bookmarkCount: number;
      status: string;
    };
  };
};

function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const data = portfolio.data;
  return (
    <li className="p-4 flex flex-col justify-between items-start bg-section-bg rounded-xl">
      <figure className="aspect-[7/6] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={data.imageUrl}
          alt={data.title}
        />
      </figure>
      <div className="w-full p-1 mt-2 flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-lg">{data.title}</p>
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
          {data.viewCount}회 · {data.createdAt}
        </p>
        <div className="flex gap-2 mt-1">
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <Download className="size-[1.2em]" />
            저장
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <Heart className="size-[1.2em]" /> {data.likeCount}
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <MessageSquareText className="size-[1.2em]" /> {data.contentCount}
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <Bookmark className="size-[1.2em]" /> {data.bookmarkCount}
          </Button>
          {data.status === "published" ? (
            <span className="text-sm text-myportfolio-text-sub">공개</span>
          ) : (
            <span className="text-sm text-myportfolio-text-sub">비공개</span>
          )}
        </div>
      </div>
    </li>
  );
}

export default PortfolioCard;
