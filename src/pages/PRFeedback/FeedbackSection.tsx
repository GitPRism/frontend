interface FeedbackSectionProps {
  title: string;
  content: string;
}

function FeedbackSection({ title, content }: FeedbackSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
      <hr className="border-[#404040] mb-3" />
      <p className="text-sm text-gray-400">{content}</p>
    </div>
  );
}

export default FeedbackSection;
