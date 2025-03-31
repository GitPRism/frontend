export const feedback = {
  11: {
    id: 11,
    title: "feat: 코드 분석 및 리펙토링 제안 기능",
    author: "coder-ssy",
    status: "merged",
    merged_at: "2025-03-02",
    base_branch: "main",
    feature_branch: "feat/#10",
    commit_sha: "a502385",
    commits: [
      {
        sha: "e7cd2c0",
        message: "feat: 코드 분석 및 리펙토링 제안 기능",
        author: "coder-ssy",
        date: "2025-03-02",
      },
    ],
    review_requests: [
      {
        requested_by: "coder-ssy",
        requested_to: "uropa0-0",
        date: "2025-03-02",
      },
    ],
    assignees: [
      {
        user: "coder-ssy",
        assigned_at: "2025-03-02",
      },
    ],
    linked_issues: [
      {
        issue_id: 10,
        title: "[Feature] GPT를 통한 코드 분석 및 리펙토링 제안 기능 구현",
        linked_by: "coder-ssy",
        closed: true,
        closed_at: "2025-03-02",
      },
    ],
    merge_info: {
      merged_by: "coder-ssy",
      message: "Pull request successfully merged and closed",
      delete_branch_suggestion: "feat/#10 브랜치는 삭제해도 안전합니다.",
    },
    description: `
    ## 📌 구현 배경
    개발자가 작성한 커밋, 이슈 내용을 기반으로 GPT API를 활용하여 코드 품질을 분석하고 리팩토링 제안을 받을 수 있는 기능이 필요했습니다. 
    이를 통해 코드 리뷰 자동화와 품질 개선을 도모하고자 했습니다. 

    ## ✨ 주요 구현 내용
    - GPT API와 연동하여 커밋 메시지 및 코드 변경 내용을 분석
    - 분석 결과를 기준으로 다음 항목에 대해 피드백 반환:
      - 커밋 메시지 규칙 준수 여부
      - 함수/모듈 단위의 커밋 구성 여부
      - Swagger 문서화 여부
      - 변수 및 함수명 명확성
      - 불필요한 코드 존재 여부
      - 민감한 환경변수 포함 여부
    - 프론트 요청 시 \`/api/v1/code-analysis\` 엔드포인트로 분석 결과 응답

    ## ✅ 테스트
    - 실제 커밋 메시지와 diff 코드를 전송하여 GPT 응답 확인
    - Swagger 기반의 테스트 문서 작성
    - API 응답의 구조가 안정적으로 동작하는지 확인

    ## 🔄 향후 계획
    - 코드 라인별 리팩토링 예시까지 포함하는 개선안 추가
    - PR 단위 분석 기능으로 확장
    - 코드 리뷰 템플릿 자동 생성 기능 고려

    ## 🤝 관련 이슈
    - #10 [Feature] GPT를 통한 코드 분석 및 리펙토링 제안 기능 구현
  `,
    gpt_feedback: {
      "좋은 습관": [
        "커밋 메시지가 명확하고 일관된 규칙을 따르고 있습니다.",
        "기능 단위로 커밋을 나누어 작업 흐름을 파악하기 쉽습니다.",
        "Swagger를 통해 API 문서를 충실하게 작성하였습니다.",
        "기능 구현 배경 및 개선 방향을 PR 설명에 잘 정리하였습니다.",
      ],
      "나쁜 습관": [
        "Swagger 주석이 일부 API에 누락된 부분이 있습니다.",
        "변수명에 약어가 포함된 곳이 있어 가독성이 떨어질 수 있습니다.",
      ],
      "개선 사항": [
        "Swagger 어노테이션을 모든 엔드포인트에 일관되게 적용해주세요.",
        "변수명은 약어보다는 전체 단어를 사용하여 의미를 명확히 전달해주세요.",
        "추가적으로 예외 처리 로직이 들어가면 안정성이 더 향상될 수 있습니다.",
      ],
      "최종 코멘트":
        "기능 목적이 명확하고 코드 품질도 우수합니다. 문서화와 명명 규칙이 조금만 더 보완되면 훌륭한 PR입니다! 👍",
    },
  },

  "9": {
    id: 9,
    title: "feat: issue내용 가져오기 구현",
    author: "coder-ssy",
    status: "merged",
    merged_at: "2025-03-02",
    base_branch: "main",
    feature_branch: "feat/#8",
    commit_sha: "a2e1a6b",
    additions: 38,
    deletions: 0,
    files_changed: 2,
    commits: [
      {
        sha: "95aea51",
        message: "feat: issue내용 가져오기 구현",
        author: "coder-ssy",
        date: "2025-03-02",
      },
    ],
    review_requests: [
      {
        requested_by: "coder-ssy",
        requested_to: "uropa0-0",
        date: "2025-03-02",
      },
    ],
    assignees: [
      {
        user: "coder-ssy",
        assigned_at: "2025-03-02",
      },
    ],
    linked_issues: [
      {
        issue_id: 8,
        title: "[Feature] 이슈 가져오는 기능 구현",
        linked_by: "coder-ssy",
        closed: true,
        closed_at: "2025-03-02",
      },
    ],
    merge_info: {
      merged_by: "coder-ssy",
      message: "Pull request successfully merged and closed",
      delete_branch_suggestion: "feat/#8 브랜치는 삭제해도 안전합니다.",
    },
    comments: [
      {
        author: "coder-ssy",
        date: "2025-03-02",
        content:
          "이슈 목록을 가져오는 기능 구현 완료했습니다. GitHub API 연동 및 필터링 기능 포함입니다.\n\n추후 사용자별 필터 옵션 확장도 고려 중입니다.",
      },
      {
        author: "uropa0-0",
        date: "2025-03-02",
        content:
          "작업 잘 봤습니다! 깔끔하게 구현되어 있고, 응답 포맷도 일관성이 있어서 좋네요.\n\n`labels` 항목을 파싱할 때 null check만 추가해주시면 더 완벽할 것 같습니다 💯",
      },
    ],
    description:
      "\n   GitHub API를 통해 사용자의 issue 목록을 가져오는 기능을 추가하였습니다.\n\n## 📌 구현 배경\nDevLog 자동화 기능의 일환으로 사용자의 작업 내역(이슈 포함)을 분석할 필요가 있어, GitHub 이슈 데이터를 수집하는 API를 먼저 구현하였습니다.\n\n## ✨ 주요 구현 내용\n- `/api/v1/github/issues` GET API 구현\n- 사용자 액세스 토큰 기반 OAuth 인증 적용\n- 로그인한 사용자의 퍼블릭 & 프라이빗 레포지토리 내 이슈 조회\n- open 상태의 이슈만 필터링\n- 이슈 정보 필드: 제목, 작성자, 생성일, 상태, 라벨 등 포함\n- RestTemplate 사용하여 GitHub API 호출\n- DTO 구조 설계 및 응답 정리\n\n## ✅ 테스트\n- 실제 access_token을 사용해 인증 테스트 진행\n- 다양한 이슈가 있는 레포지토리에서 정상적으로 응답 받는지 확인\n- Swagger UI에서 request/response 구조 확인\n\n## 🚧 개선 예정\n- 페이징 처리 (`per_page`, `page` 지원)\n- 상태 필터링 (open/closed/all)\n- 기간 조건 필터 (`created_since` 등)\n- 이슈 템플릿 내용까지 포함 여부 검토\n\n## 🤝 관련 이슈\n- #8 [Feature] 이슈 가져오는 기능 구현\n  ",
    gpt_feedback: {
      "좋은 습관": [
        "기능을 작게 나누고 단일 책임 원칙을 잘 지켰습니다.",
        "GitHub API 연동 방식이 명확하고 응답 포맷도 정리되어 있습니다.",
        "PR 설명에 구현 목적과 테스트 내역이 구체적으로 작성되었습니다.",
      ],
      "나쁜 습관": [
        "에러 응답 처리 로직이 부족해 실패 시 디버깅이 어려울 수 있습니다.",
        "일부 필드에 null 체크가 누락되어 예외가 발생할 수 있습니다.",
      ],
      "개선 사항": [
        "API 응답 실패 시의 예외 처리를 추가해주세요.",
        "GitHub API의 응답 구조가 바뀔 수 있으므로, 예상하지 못한 필드에 대한 대응도 고려해주세요.",
        "페이징, 상태 필터 등의 확장성을 염두에 두고 파라미터 구조를 설계하면 좋습니다.",
      ],
      "최종 코멘트":
        "이슈 조회 기능의 기본기를 잘 다졌습니다. 안정성과 확장성 측면에서 몇 가지 보완만 더하면 실사용에 적합한 API로 완성될 것입니다! 💪",
    },
  },
};
