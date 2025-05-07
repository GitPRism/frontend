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
  const [selectedRepo, setSelectedRepo] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const repo = repos.find((r) => r.repoName === selectedRepo);
    if (repo) {
      navigate(`portfolioedit/${repo.id}`);
    }
  };

  return (
    <RepoModal
      repos={repos}
      selectedRepo={selectedRepo}
      onSelect={setSelectedRepo}
      onSubmit={handleSubmit}
    />
  );
}

export default SelectRepos;
