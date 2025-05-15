import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyRepo } from "@/services/Repo/getMyRepo";

export const useRepos = () => {
  const [repos, setRepos] = useState<any[]>([]);

  const { data, refetch } = useQuery({
    queryKey: ["github-repos"],
    queryFn: getMyRepo,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false, // 탭 다시 올려도 재요청 안 함
    refetchOnMount: false, // 컴포넌트 다시 떠도 재요청 안 함
    enabled: true, // 처음 마운트시 api 요청
  });

  const handleOpenRepoModal = () => {
    if (data) {
      setRepos(data);
      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      modal?.showModal();
    } else {
      refetch().then((result) => {
        setRepos(result.data);
        const modal = document.getElementById(
          "my_modal_3"
        ) as HTMLDialogElement;
        modal?.showModal();
      });
    }
  };

  return {
    repos,
    handleOpenRepoModal,
  };
};
