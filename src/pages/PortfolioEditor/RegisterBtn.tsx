import Button from "@/components/common/Button";
import { statusToggle } from "@/services/Portfolio/statusToggle";

function RegisterBtn({
  repoId,
  onSuccess,
}: {
  repoId: string;
  onSuccess: () => void;
}) {
  return (
    <div className="mt-4 flex justify-center">
      <Button
        bgColor="bg-section-bg"
        textColor="button-text-green"
        rounded="rounded-lg"
        onClick={() => {
          statusToggle(repoId)
            .then(() => {
              alert("등록되었습니다.");
              onSuccess();
            })
            .catch((error: any) => {
              console.log(error.response.data.message);
            });
        }}
      >
        등록하기
      </Button>
    </div>
  );
}

export default RegisterBtn;
