import Button from "@/components/common/Button";
import Notification from "./Notification";
import Profile from "./Profile";
import SelectRepos from "@/components/modal/SelectRepos";
import { useRepos } from "@/hooks/useRepos";

// header의 오른쪽: 버튼, 알림, 아바타
function End() {
  const { repos, handleOpenRepoModal } = useRepos();

  return (
    <>
      <SelectRepos repos={repos} />
      <div className="flex items-center gap-3 flex-none px-4">
        <Button
          type="button"
          bgColor="bg-button-primary"
          textColor="white"
          onClick={handleOpenRepoModal}
        >
          포트폴리오 생성
        </Button>
        <Notification />
        <Profile />
        {/* <Dropdown /> */}
      </div>
    </>
  );
}

export default End;
