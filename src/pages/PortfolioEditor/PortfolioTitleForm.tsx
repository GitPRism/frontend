import Input from "@/components/common/Input";

function PortfolioTitleForm({
  title,
  onTitleChange,
}: {
  title: string;
  onTitleChange: (title: string) => void;
}) {
  return (
    <Input
      type="text"
      placeholder="제목을 입력해주세요"
      value={title}
      onChange={(e) => {
        onTitleChange(e.target.value);
      }}
      className="w-full rounded-lg"
    />
  );
}

export default PortfolioTitleForm;
