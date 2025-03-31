export interface ProjectList {
  message: string;
  code: number;
  id: number;
  data: {
    repo_name: string;
    url: string;
    description: string;
    default_branch: string;
    language: string;
  };
}

export const projectList: ProjectList[] = [
  {
    message: "Repository 조회 완료",
    code: 201,
    id: 1,
    data: {
      repo_name: "backend-django",
      url: "https://github.com/2024-Summer-Bootcamp-Team-F/backend-django",
      description: "2024 썸머 부트캠프 팀 F의 백엔드 Django 프로젝트",
      default_branch: "main",
      language: "Python",
    },
  },
  {
    message: "Repository 조회 완료",
    code: 201,
    id: 2,
    data: {
      repo_name: "backend_springboot_v2_",
      url: "https://github.com/TecheerPicture-advancement/backend_springboot_v2_",
      description: "TecheerPicture 프로젝트의 Spring Boot 백엔드 리포지토리",
      default_branch: "main",
      language: "Java",
    },
  },
  {
    message: "Repository 조회 완료",
    code: 201,
    id: 3,
    data: {
      repo_name: "backend",
      url: "https://github.com/SacHacks-hacktastic-2025/backend",
      description: "SacHacks 2025 해커톤을 위한 백엔드 프로젝트",
      default_branch: "main",
      language: "JavaScript",
    },
  },
];
