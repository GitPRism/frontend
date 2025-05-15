// RepoList.tsx
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
  selectedRepo: number[];
  onSelect: (repoId: number) => void;
};

function RepoList({ repos, selectedRepo, onSelect }: Props) {
  return (
    <ul className="space-y-2 max-h-[400px] overflow-y-auto">
      {repos.map((repo, idx) => (
        <label className="flex-1 cursor-pointer" key={idx}>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
            <input
              type="checkbox"
              name="repo-select"
              value={repo.id}
              checked={selectedRepo.includes(repo.id)}
              onChange={(e) => onSelect(Number(e.target.value))}
              className="radio radio-primary"
            />
            <span className="font-medium">{repo.repoName}</span>
          </li>
        </label>
      ))}
    </ul>
  );
}

export default RepoList;
