import { useState } from "react";

interface UseLikeStateProps {
  initialIsLiked: boolean;
  initialLikeCount: number;
}

export const useLikeState = ({
  initialIsLiked,
  initialLikeCount,
}: UseLikeStateProps) => {
  const [isLocalLiked, setIsLocalLiked] = useState(initialIsLiked);
  const [localLikeCount, setLocalLikeCount] = useState(initialLikeCount);

  return {
    isLocalLiked,
    setIsLocalLiked,
    localLikeCount,
    setLocalLikeCount,
  };
};
