import { useRepos } from "@/hooks/useRepos";
import { useLocation } from "react-router-dom";
import Button from "@/components/common/Button";
import Notification from "./Notification";
import Profile from "./Profile";
import SelectRepos from "@/components/modal/SelectRepos";
import InvateUser from "@/components/modal/InvateUser";

// header의 오른쪽: 버튼, 알림, 아바타
function End() {
  const { repos, handleOpenRepoModal } = useRepos();
  const location = useLocation();

  const isPortfolioEditor = location.pathname.includes("/portfolioedit");
  console.log(isPortfolioEditor);
  const handleButtonClick = () => {
    if (isPortfolioEditor) {
      // 포트폴리오 에디터 페이지에서는 사용자 초대
      // 사용자 초대 하면서 소켓 연결
      const modal = document.getElementById(
        "invate-user-modal"
      ) as HTMLDialogElement;
      modal?.showModal();
    } else {
      // 다른 페이지에서는 레포 선택 모달 열기
      handleOpenRepoModal();
    }
  };

  return (
    <>
      <SelectRepos repos={repos} />
      <InvateUser />
      <div className="flex items-center gap-3 flex-none px-4">
        <Button
          type="button"
          bgColor="bg-button-primary"
          textColor="text-white"
          onClick={handleButtonClick}
        >
          {isPortfolioEditor ? "사용자 초대" : "포트폴리오 생성"}
        </Button>
        <Notification />
        <Profile />
        {/* <Dropdown /> */}
      </div>
    </>
  );
}

export default End;
