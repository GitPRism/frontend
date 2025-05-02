import Button from "@/components/common/Button";

function Content() {
  return (
    <article className="mb-6">
      <p className="text-base text-gray-800 py-4 px-3 bg-white">
        포트폴리오 내용~~
      </p>
      <div className="flex gap-2 mt-4">
        <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
          좋아요 120
        </Button>
        <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
          북마크
        </Button>
        <Button rounded="rounded-2xl" bgColor="bg-button-bg-second">
          저장
        </Button>
      </div>
    </article>
  );
}

export default Content;
