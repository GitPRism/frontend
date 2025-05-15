import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import apiClient from "@/services/apiClient";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function InputForm({ portfolioId }: { portfolioId: string | undefined }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    console.log(comment);
    apiClient
      .post(`/api/v1/portfolios/${portfolioId}/comments`, {
        comment,
      })
      .then((res) => {
        console.log(res.data);
        setComment("");
        queryClient.setQueryData(["comments", portfolioId], (old: any) => {
          const newComment = {
            comment: res.data.comment,
            userName: res.data.userName,
            createdAt: res.data.createdAt,
          };

          if (!old) {
            return {
              data: {
                data: [newComment],
              },
            };
          }

          return {
            ...old,
            data: {
              ...old.data,
              data: [newComment, ...(old.data?.data ?? [])],
            },
          };
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form className="flex items-center gap-2 mb-4 bg-section-bg p-3 rounded-2xl">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <input
        onChange={onChange}
        value={comment}
        type="text"
        placeholder="댓글을 입력해주세요"
        className="input flex-1 text-black"
      />
      <Button
        textColor="button-text-green"
        bgColor="bg-[#444444]"
        rounded="rounded-2xl"
        onClick={handleSubmit}
      >
        등록
      </Button>
    </form>
  );
}

export default InputForm;
