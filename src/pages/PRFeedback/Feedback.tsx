import FeedbackSection from "./FeedbackSection";

function Feedback() {
  return (
    <div className="w-md h-[calc(100vh-110px)] overflow-y-auto border-2 border-[#404040] rounded-lg p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <FeedbackSection
            title="좋은 습관"
            content="좋은 습관 내용을 작성해주세요."
          />
          <FeedbackSection
            title="나쁜 습관"
            content="나쁜 습관 내용을 작성해주세요."
          />
          <FeedbackSection
            title="개선 사항"
            content="개선 사항 내용을 작성해주세요."
          />
          <FeedbackSection
            title="최종 코멘트"
            content="최종 코멘트를 작성해주세요."
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
