import { useState } from "react";

interface UseBookmarkStateProps {
  initialIsBookmarked: boolean;
  initialBookmarkCount: number;
}

export const useBookmarkState = ({
  initialIsBookmarked,
  initialBookmarkCount,
}: UseBookmarkStateProps) => {
  const [isLocalBookmarked, setIsLocalBookmarked] =
    useState(initialIsBookmarked);
  const [localBookmarkCount, setLocalBookmarkCount] =
    useState(initialBookmarkCount);

  return {
    isLocalBookmarked,
    setIsLocalBookmarked,
    localBookmarkCount,
    setLocalBookmarkCount,
  };
};
