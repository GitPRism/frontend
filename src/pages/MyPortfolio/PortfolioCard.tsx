import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { Download, Heart, MessageSquareText, Bookmark } from "lucide-react";
import { useLikeState } from "@/hooks/like/useLikeState";
import { useBookmarkState } from "@/hooks/bookmark/useBookmarkState";
import { useLikeController } from "@/services/like/useLikeController";
import { useBookmarkController } from "@/services/bookmark/useBookmarkController";

type PortfolioCardProps = {
  portfolio: {
    portfolioId: number;
    title: string;
    viewCount: number;
    createdAt: string;
    contentCount: number;
    status: string;
    repoOrgAvatarUrl: string;
    liked: boolean;
    likeCount: number;
    bookmarked: boolean;
    bookmarkCount: number;
  };
};

function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const data = portfolio;
  const navigate = useNavigate();
  const { isLocalLiked, setIsLocalLiked, localLikeCount, setLocalLikeCount } =
    useLikeState({
      initialIsLiked: data.liked,
      initialLikeCount: data.likeCount,
    });
  const {
    isLocalBookmarked,
    setIsLocalBookmarked,
    localBookmarkCount,
    setLocalBookmarkCount,
  } = useBookmarkState({
    initialIsBookmarked: data.bookmarked,
    initialBookmarkCount: data.bookmarkCount,
  });

  const { like } = useLikeController({
    portfolioId: data.portfolioId,
    isLiked: isLocalLiked,
    setIsLiked: setIsLocalLiked,
    setLocalLikeCount,
  });

  const { bookmark } = useBookmarkController({
    portfolioId: data.portfolioId,
    isBookmarked: isLocalBookmarked,
    setIsBookmarked: setIsLocalBookmarked,
    setLocalBookmarkCount,
  });

  return (
    <li
      onClick={() => {
        navigate(`/portfolio/${data.portfolioId}`);
      }}
      className="p-4 flex flex-col justify-between items-start bg-section-bg rounded-xl hover:scale-[1.01] hover:shadow-lg hover:brightness-110 transition duration-200 ease-in-out cursor-pointer"
    >
      <figure className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-3">
        <img
          className="w-full h-full object-cover"
          src={data.repoOrgAvatarUrl}
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
          <Button
            onClick={(e) => {
              e.stopPropagation();
              like();
            }}
            rounded="rounded-2xl"
            bgColor="bg-button-bg-second"
          >
            <Heart
              fill={isLocalLiked ? "currentColor" : "none"}
              className="size-[1.2em]"
            />{" "}
            {localLikeCount}
          </Button>
          <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
            <MessageSquareText className="size-[1.2em]" /> {data.contentCount}
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              bookmark();
            }}
            rounded="rounded-2xl"
            bgColor="bg-button-bg-second"
          >
            <Bookmark
              fill={isLocalBookmarked ? "currentColor" : "none"}
              className="size-[1.2em]"
            />{" "}
            {localBookmarkCount}
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
