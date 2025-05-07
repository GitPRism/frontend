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
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
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
