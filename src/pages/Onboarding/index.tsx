import Button from "./Button";

function Onboarding() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 ">
      <div className="text-center text-white text-3xl font-bold mb-6">
        Github 프로젝트 분석 AI와 함께 쉽고 간편하게
        <br /> <span className="text-sky-400">GitPRism</span>과 함께
      </div>
      <Button />
    </div>
  );
}

export default Onboarding;
