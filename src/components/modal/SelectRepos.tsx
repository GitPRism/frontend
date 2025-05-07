// SelectRepos.tsx
import { useState } from "react";

type Props = {
  repos: any[]; // 필요하면 타입 더 구체화
};

function SelectRepos({ repos }: Props) {
  const [selectedRepo, setSelectedRepo] = useState<string>("");

  const handleSubmit = () => {
    const repo = repos.find((r) => r.repoName === selectedRepo);
    if (repo) {
      console.log(repo);
    }
  };

  return (
    <dialog id="my_modal_3" className="modal text-black">
      <div className="modal-box w-11/12 max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4">📦 GitHub Repos</h3>
        <div className="space-y-4">
          <ul className="space-y-2 max-h-[400px] overflow-y-auto">
            {repos?.map((repo, idx) => (
              <label className="flex-1 cursor-pointer" key={idx}>
                <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
                  <input
                    type="radio"
                    name="repo-select"
                    value={repo.repoName}
                    checked={selectedRepo === repo.repoName}
                    onChange={(e) => setSelectedRepo(e.target.value)}
                    className="radio radio-primary"
                  />
                  <span className="font-medium">{repo.repoName}</span>
                </li>
              </label>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              disabled={!selectedRepo}
              className="btn btn-primary"
            >
              선택 완료
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default SelectRepos;
