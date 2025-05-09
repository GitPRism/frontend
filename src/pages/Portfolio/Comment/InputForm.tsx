import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";

function InputForm() {
  return (
    <form className="flex items-center gap-2 mb-4 bg-section-bg p-3 rounded-2xl">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <input type="text" placeholder="Type here" className="input flex-1" />
      <Button
        textColor="button-text-green"
        bgColor="bg-[#444444]"
        rounded="rounded-2xl"
      >
        등록
      </Button>
    </form>
  );
}

export default InputForm;
