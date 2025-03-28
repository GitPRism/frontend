import TextBox from "./TextBox";

function ProjectEvaluation() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <TextBox
        title="요약"
        content="활발한 기여를 하고 있으며, 주로 기능 개발과 버그 수정에 집중함. 코드 품질이 양호하지만, 일부 PR에서 테스트 코드 부족이 발견됨. 
주요 기능 개발에 참여하며, 신규 API 구현과 기존 코드 유지보수를 수행함. 안정적인 코드 작성이 강점이나, 일부 PR에서 코드 리뷰 지연이 발생함.
데이터베이스 최적화와 쿼리 성능 개선 작업 수행. 전체적인 성능 향상이 이루어졌으나, 일부 보고서 생성 속도가 기대보다 느림."
      />
      <TextBox
        title="장점"
        content="다양한 기능 개발 경험이 있음 버그 수정 기여도가 높음 PR 병합률이 높고, 코드 리뷰 반영이 빠름"
      />
      <TextBox
        title="개선사항"
        content="테스트 코드 작성이 부족함 일부 PR에서 문서화 부족함"
      />
    </div>
  );
}

export default ProjectEvaluation;
