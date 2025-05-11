import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

interface LikeControllerProps {
  portfolioId: number;
  isLiked: boolean;
  setIsLiked: (value: boolean | ((prev: boolean) => boolean)) => void;
  setLocalLikeCount: (value: number | ((prev: number) => number)) => void;
}

export const useLikeController = ({
  portfolioId,
  isLiked,
  setIsLiked,
  setLocalLikeCount,
}: LikeControllerProps) => {
  const queryClient = useQueryClient();

  const { mutate: like } = useMutation({
    mutationFn: async (currentIsLiked: boolean) => {
      if (currentIsLiked) {
        await apiClient.delete(`/api/v1/portfolios/${portfolioId}/likes`);
      } else {
        await apiClient.post(`/api/v1/portfolios/${portfolioId}/likes`);
      }
    },
    onMutate: async (currentIsLiked: boolean) => {
      const previousData = queryClient.getQueryData([
        "portfolios",
        "like",
        portfolioId,
      ]);
      setIsLiked((prev) => !prev);
      setLocalLikeCount((prev) => prev + (currentIsLiked ? -1 : 1));

      return { previousData };
    },
    onError: (err, currentIsLiked: boolean, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ["portfolios", "like", portfolioId],
          context.previousData
        );
      }

      if (currentIsLiked) {
        setIsLiked(false);
        setLocalLikeCount((prev) => prev - 1);
      } else {
        setIsLiked(true);
        setLocalLikeCount((prev) => prev + 1);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["portfolios", "like", portfolioId],
      });
    },
  });

  return { like: () => like(isLiked) };
};
