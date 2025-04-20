import Button from "@/components/common/Button";
import Notification from "./Notification";
import Avatar from "./Avatar";

function End() {
  {
    /* 오른쪽: 버튼 + 알림 + 아바타 */
  }
  return (
    <div className="flex items-center gap-3 flex-none px-4">
      <Button type="button" bgColor="section-bg" textColor="white">
        포트폴리오 생성
      </Button>
      <Notification />
      <Avatar />
      {/* <Dropdown /> */}
    </div>
  );
}

export default End;
