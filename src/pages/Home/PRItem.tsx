import { useNavigate } from "react-router-dom";

interface PRItemProps {
  title: string;
  tags: string[];
  assignee: {
    image: string;
    name: string;
  };
  comments: number;
  date: string;
}

function PRItem({ title, tags, assignee, comments, date }: PRItemProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/prfeedback/${encodeURIComponent(title)}`)}
      className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-sm ${
                tag === "버그수정" ? "bg-blue-500" : "bg-green-500"
              } text-white rounded`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={assignee.image}
            alt={assignee.name}
          />
          <span className="text-gray-300">{assignee.name}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <span>{comments}</span>
        </div>
        <span className="text-gray-300">{date}</span>
      </div>
    </div>
  );
}

export default PRItem;
