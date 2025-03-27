import PRDetail from "./PRDetail";
import Feedback from "./Feedback";

function PRFeedback() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 min-w-full">
        <div className="flex-1">
          <PRDetail />
        </div>
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
        <div className="flex-1">
          <Feedback />
        </div>
      </div>
    </div>
  );
}

export default PRFeedback;
