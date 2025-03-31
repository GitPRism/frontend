import ReactMarkdown from "react-markdown";

function PRDetail({ pr }: { pr: any }) {
  return (
    <div className="h-[calc(100vh-110px)] overflow-y-auto border-2 border-[#404040] rounded-lg p-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">{pr.title}</p>
        <p className="text-sm text-gray-400 flex flex-wrap ">
          <ReactMarkdown>{pr.description}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default PRDetail;
