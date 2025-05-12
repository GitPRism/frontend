import Avatar from "@/components/common/Avatar";
import {
  Bookmark,
  HeartPlus,
  HeartMinus,
  MessageSquareText,
} from "lucide-react";
import { useLikeState } from "@/hooks/like/useLikeState";
import { useLikeController } from "@/services/like/useLikeController";
import { useBookmarkState } from "@/hooks/bookmark/useBookmarkState";
import { useBookmarkController } from "@/services/bookmark/useBookmarkController";
import { useNavigate } from "react-router-dom";
interface BookmarkItem {
  portfolioId: number;
  title: string;
  repoOrgAvatarUrl: string;
  avatarUrl: string;
  createdAt: string;
  comments: number;
  liked: boolean;
  likeCount: number;
  bookmarked: boolean;
  bookmarkCount: number;
  commentCount: number;
  username: string;
}
function BookmarkItem({ item }: { item: BookmarkItem }) {
  const navigate = useNavigate();

  const { isLocalLiked, setIsLocalLiked, localLikeCount, setLocalLikeCount } =
    useLikeState({
      initialIsLiked: item.liked,
      initialLikeCount: item.likeCount,
    });

  const { like } = useLikeController({
    portfolioId: item.portfolioId,
    isLiked: isLocalLiked,
    setIsLiked: setIsLocalLiked,
    setLocalLikeCount,
  });

  const {
    isLocalBookmarked,
    setIsLocalBookmarked,
    localBookmarkCount,
    setLocalBookmarkCount,
  } = useBookmarkState({
    initialIsBookmarked: item.bookmarked,
    initialBookmarkCount: item.bookmarkCount,
  });

  const { bookmark } = useBookmarkController({
    portfolioId: item.portfolioId,
    isBookmarked: isLocalBookmarked,
    setIsBookmarked: setIsLocalBookmarked,
    setLocalBookmarkCount,
  });

  return (
    <li
      key={item.portfolioId}
      className="flex items-center gap-3 rounded-xl p-4 hover:bg-section-bg cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => {
        navigate(`/portfolio/${item.portfolioId}`);
      }}
    >
      <img
        src={item.repoOrgAvatarUrl}
        alt="썸네일"
        className="w-44 h-24 object-cover rounded-lg"
      />
      <div className="w-full flex justify-between items-center gap-1">
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">{item.title}</p>
          <div className="flex items-center gap-4">
            <Avatar src={item.avatarUrl} width="w-8" />
            <span className="text-sm text-myportfolio-text-sub">
              {item.username} · {item.createdAt}
            </span>
          </div>
        </div>
        <div className="text-sm text-white flex gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              like();
            }}
            className="flex items-center gap-1"
          >
            {isLocalLiked ? <HeartMinus /> : <HeartPlus fill="none" />}
            {localLikeCount}
          </button>
          <span className="flex items-center gap-1">
            <MessageSquareText />
            {item.commentCount}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              bookmark();
            }}
            className="flex items-center gap-1"
          >
            {isLocalBookmarked ? (
              <Bookmark fill="currentColor" />
            ) : (
              <Bookmark fill="none" />
            )}
            {localBookmarkCount}
          </button>
        </div>
      </div>
    </li>
  );
}

export default BookmarkItem;
