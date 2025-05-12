import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

interface BookmarkControllerProps {
  portfolioId: number;
  isBookmarked: boolean;
  setIsBookmarked: (value: boolean | ((prev: boolean) => boolean)) => void;
  setLocalBookmarkCount: (value: number | ((prev: number) => number)) => void;
}

export const useBookmarkController = ({
  portfolioId,
  isBookmarked,
  setIsBookmarked,
  setLocalBookmarkCount,
}: BookmarkControllerProps) => {
  const queryClient = useQueryClient();

  const { mutate: bookmark } = useMutation({
    mutationFn: async (currentIsBookmarked: boolean) => {
      if (currentIsBookmarked) {
        await apiClient.delete(`/api/v1/portfolios/${portfolioId}/bookmarks`);
      } else {
        await apiClient.post(`/api/v1/portfolios/${portfolioId}/bookmarks`);
      }
    },
    onMutate: async (currentIsBookmarked: boolean) => {
      // 이전 상태 저장
      const previousData = queryClient.getQueryData([
        "portfolios",
        "bookmark",
        portfolioId,
      ]);

      // 낙관적 UI 반영
      setIsBookmarked((prev: boolean) => !prev);
      setLocalBookmarkCount(
        (prev: number) => prev + (currentIsBookmarked ? -1 : 1)
      );

      return { previousData };
    },
    onError: (err, currentIsBookmarked: boolean, context) => {
      // 에러 발생 시 이전 상태로 복구
      // context는 onMutate에서 반환한 값
      // currentIsBookmarked는 현재 북마크 상태

      if (context?.previousData) {
        queryClient.setQueryData(
          ["portfolios", "bookmark", portfolioId],
          context.previousData
        );
      }

      if (currentIsBookmarked) {
        setIsBookmarked(false);
        setLocalBookmarkCount((prev: number) => prev - 1);
      } else {
        setIsBookmarked(true);
        setLocalBookmarkCount((prev: number) => prev + 1);
      }
    },
    onSettled: () => {
      // 성공/실패 상관없이 데이터 리프레시
      queryClient.invalidateQueries({
        queryKey: ["portfolios", "bookmark", portfolioId],
      });
      queryClient.invalidateQueries({
        queryKey: ["portfolios"],
      });
      queryClient.invalidateQueries({
        queryKey: ["myBookmark"],
      });
    },
  });

  return { bookmark: () => bookmark(isBookmarked) };
};
