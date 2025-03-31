import FeedbackSection from "./FeedbackSection";

function Feedback({ pr }: { pr: any }) {
  console.log(pr.gpt_feedback);
  return (
    <div className="h-[calc(100vh-110px)] overflow-y-auto border-2 border-[#404040] rounded-lg p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <FeedbackSection
            title="좋은 습관"
            content={pr.gpt_feedback["좋은 습관"].join("\n")}
          />
          <FeedbackSection
            title="나쁜 습관"
            content={pr.gpt_feedback["나쁜 습관"].join("\n")}
          />
          <FeedbackSection
            title="개선 사항"
            content={pr.gpt_feedback["개선 사항"].join("\n")}
          />
          <FeedbackSection
            title="최종 코멘트"
            content={pr.gpt_feedback["최종 코멘트"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
