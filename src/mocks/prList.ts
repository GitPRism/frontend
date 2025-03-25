export interface PRData {
  title: string;
  tags: string[];
  assignee: {
    image: string;
    name: string;
  };
  comments: number;
  date: string;
}

export const mockPRList: PRData[] = [
  {
    title: "PR 제목이 들어갈 자리입니다 1",
    tags: ["버그수정", "기능개선"],
    assignee: {
      image: "https://github.com/github.png",
      name: "담당자1",
    },
    comments: 3,
    date: "2024-01-15",
  },
  {
    title: "PR 제목이 들어갈 자리입니다 2",
    tags: ["기능개선"],
    assignee: {
      image: "https://github.com/github.png",
      name: "담당자2",
    },
    comments: 5,
    date: "2024-01-16",
  },
  {
    title: "PR 제목이 들어갈 자리입니다 3",
    tags: ["버그수정"],
    assignee: {
      image: "https://github.com/github.png",
      name: "담당자3",
    },
    comments: 2,
    date: "2024-01-17",
  },
  {
    title: "PR 제목이 들어갈 자리입니다 4",
    tags: ["기능개선", "UI/UX"],
    assignee: {
      image: "https://github.com/github.png",
      name: "담당자4",
    },
    comments: 7,
    date: "2024-01-18",
  },
  {
    title: "PR 제목이 들어갈 자리입니다 5",
    tags: ["버그수정", "성능개선"],
    assignee: {
      image: "https://github.com/github.png",
      name: "담당자5",
    },
    comments: 4,
    date: "2024-01-19",
  },
];
