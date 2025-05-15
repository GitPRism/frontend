// RepoModal.tsx
import RepoList from "./RepoList";

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
  onSubmit: () => void;
};

function RepoModal({ repos, selectedRepo, onSelect, onSubmit }: Props) {
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
          <RepoList
            repos={repos}
            selectedRepo={selectedRepo}
            onSelect={onSelect}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={onSubmit}
              disabled={selectedRepo.length === 0}
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

export default RepoModal;
