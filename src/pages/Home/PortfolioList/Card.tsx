import Avatar from "@/components/common/Avatar";
import { useNavigate } from "react-router-dom";
import { Bookmark, HeartPlus, HeartMinus } from "lucide-react";

import { useBookmarkState } from "@/hooks/bookmark/useBookmarkState";
import { useLikeState } from "@/hooks/like/useLikeState";
import { useBookmarkController } from "@/services/bookmark/useBookmarkController";
import { useLikeController } from "@/services/like/useLikeController";

interface CardProps {
  title: string;
  badgeRank?: boolean;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount?: number;
  likeCount?: number;
  userName: string;
  updatedAt: string;
  portfolioId: number;
  bookmarked: boolean;
  index: number;
}

function Card({
  index,
  portfolioId,
  title,
  badgeRank,
  imageUrl,
  avatarUrl,
  description,
  userName,
  meta,
  updatedAt,
  bookmarked,
  bookmarkCount = 0,
  likeCount = 0,
}: CardProps) {
  const navigate = useNavigate();
  const {
    isLocalBookmarked,
    setIsLocalBookmarked,
    localBookmarkCount,
    setLocalBookmarkCount,
  } = useBookmarkState({
    initialIsBookmarked: bookmarked,
    initialBookmarkCount: bookmarkCount,
  });
  const { isLocalLiked, setIsLocalLiked, localLikeCount, setLocalLikeCount } =
    useLikeState({
      initialIsLiked: false, // 서버 좋아요 response 여부 추후 추가 예정
      initialLikeCount: likeCount,
    });

  const { bookmark } = useBookmarkController({
    portfolioId,
    isBookmarked: isLocalBookmarked,
    setIsBookmarked: setIsLocalBookmarked,
    setLocalBookmarkCount,
  });
  const { like } = useLikeController({
    portfolioId,
    isLiked: isLocalLiked,
    setIsLiked: setIsLocalLiked,
    setLocalLikeCount,
  });

  return (
    <div
      onClick={() => {
        navigate(`/portfolio/${portfolioId}`);
      }}
      className="card w-full shadow-sm hover:scale-[1.01] hover:shadow-lg hover:brightness-110 transition duration-200 ease-in-out cursor-pointer"
    >
      <figure className="aspect-[16/9] overflow-hidden">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          {badgeRank && (
            <div className="badge badge-secondary text-sm flex-shrink-0">
              {index + 1}
            </div>
          )}
        </div>
        <div className="flex gap-1.5 justify-between items-center">
          <Avatar src={avatarUrl} />
          <div className="flex-1 min-w-0">
            <p className="w-5/6 text-base truncate">{description}</p>
            <p className="w-5/6 text-sm text-home-text-sub truncate">
              {meta ? meta : `${userName} ${updatedAt}`}
            </p>
          </div>
          <div className="text-right text-sm">
            <div
              className="flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                console.log(isLocalBookmarked);
                bookmark();
              }}
            >
              <Bookmark fill={isLocalBookmarked ? "currentColor" : "none"} />
              {localBookmarkCount}
            </div>
            <div
              className="flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                like();
              }}
            >
              {isLocalLiked ? <HeartMinus /> : <HeartPlus fill="none" />}
              {localLikeCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
