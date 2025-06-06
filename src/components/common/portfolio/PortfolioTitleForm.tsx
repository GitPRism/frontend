import Input from "@/components/common/Input";
import RegisterBtn from "./RegisterBtn";
import { editPortfolioTitle } from "@/services/Portfolio/editPortfolioData";

function PortfolioTitleForm({
  title,
  onTitleChange,
  repoId,
}: {
  title: string;
  onTitleChange: (title: string) => void;
  repoId: number;
}) {
  // 포트폴리오 제목 입력 폼
  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => {
          onTitleChange(e.target.value);
        }}
        className="w-full rounded-lg"
      />
      <RegisterBtn onClick={() => editPortfolioTitle(repoId, title)}>
        저장하기
      </RegisterBtn>
    </div>
  );
}

export default PortfolioTitleForm;
