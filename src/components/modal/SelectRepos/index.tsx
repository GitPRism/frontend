// SelectRepos.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoModal from "./RepoModal.tsx";

type Repo = {
  id: number;
  githubId: string;
  repoName: string;
  url: string;
  description: null;
  defaultBranch: string;
  language: string;
  visibility: string;
};

type Props = {
  repos: Repo[];
};

function SelectRepos({ repos }: Props) {
  const [selectedRepo, setSelectedRepo] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log(selectedRepo);
    // const repo = repos.find((r) => selectedRepo.includes(r.id));
    if (selectedRepo) {
      // console.log(selectedRepo);
      const repoQuery = selectedRepo.map(encodeURIComponent).join(",");
      const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
      modal?.close();
      navigate(`portfolioedit?repos=${repoQuery}`);
    }
  };

  const handleSelect = (repoId: number) => {
    setSelectedRepo((prev) =>
      prev.includes(repoId)
        ? prev.filter((id) => id !== repoId)
        : [...prev, repoId]
    );
  };

  return (
    <RepoModal
      repos={repos}
      selectedRepo={selectedRepo}
      onSelect={handleSelect}
      onSubmit={handleSubmit}
    />
  );
}

export default SelectRepos;
