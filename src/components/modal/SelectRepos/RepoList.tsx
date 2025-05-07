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
  selectedRepo: string;
  onSelect: (repoName: string) => void;
};

function RepoList({ repos, selectedRepo, onSelect }: Props) {
  return (
    <ul className="space-y-2 max-h-[400px] overflow-y-auto">
      {repos.map((repo, idx) => (
        <label className="flex-1 cursor-pointer" key={idx}>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
            <input
              type="radio"
              name="repo-select"
              value={repo.repoName}
              checked={selectedRepo === repo.repoName}
              onChange={(e) => onSelect(e.target.value)}
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
