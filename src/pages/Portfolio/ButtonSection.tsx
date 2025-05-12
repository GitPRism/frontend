import { Download, HeartPlus, HeartMinus, Bookmark } from "lucide-react";
import Button from "@/components/common/Button";
import { useLikeController } from "@/services/like/useLikeController";
import { useBookmarkController } from "@/services/bookmark/useBookmarkController";

interface ButtonSectionProps {
  portfolioId: number;
  likeCount: number;
  bookmarkCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
}

import { useLikeState } from "@/hooks/like/useLikeState";
import { useBookmarkState } from "@/hooks/bookmark/useBookmarkState";

function ButtonSection({
  portfolioId,
  likeCount,
  bookmarkCount,
  isBookmarked,
  isLiked, // 서버 좋아요 여부 추후 추가 예정
}: ButtonSectionProps) {
  const { isLocalLiked, setIsLocalLiked, localLikeCount, setLocalLikeCount } =
    useLikeState({
      initialIsLiked: !isLiked, // 이 좋아요 값만 반대로 되어있음
      initialLikeCount: likeCount,
    });

  const {
    isLocalBookmarked,
    setIsLocalBookmarked,
    localBookmarkCount,
    setLocalBookmarkCount,
  } = useBookmarkState({
    initialIsBookmarked: isBookmarked,
    initialBookmarkCount: bookmarkCount,
  });

  const { like } = useLikeController({
    portfolioId,
    isLiked: isLocalLiked,
    setIsLiked: setIsLocalLiked,
    setLocalLikeCount,
  });

  const { bookmark } = useBookmarkController({
    portfolioId,
    isBookmarked: isLocalBookmarked,
    setIsBookmarked: setIsLocalBookmarked,
    setLocalBookmarkCount,
  });

  return (
    <div className="flex gap-2 mt-1">
      <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
        <Download className="size-[1.2em]" />
        저장
      </Button>
      <Button
        onClick={() => {
          console.log("좋아요 버튼 클릭");
          like();
        }}
        rounded="rounded-2xl"
        bgColor="bg-button-bg-second"
      >
        {isLocalLiked ? (
          <HeartMinus className="size-[1.2em]" />
        ) : (
          <HeartPlus className="size-[1.2em]" />
        )}
        {localLikeCount}
      </Button>
      <Button
        onClick={() => {
          console.log("북마크 버튼 클릭");
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
    </div>
  );
}

export default ButtonSection;
