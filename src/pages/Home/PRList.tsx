import PrImg from "@/assets/PRImg.png";
import PRItem from "./PRItem";
import { mockPRList } from "@/mocks/prList";

function PRList() {
  return (
    <div className="p-4">
      <div className="w-full h-full border-2 flex flex-col bg-charcoal border-[#404040] rounded-lg p-4 text-center">
        <p className="flex items-center gap-2 text-center m-auto">
          <img src={PrImg} alt="PRImg" />
          Pull Request
        </p>

        <div className="flex flex-col gap-4 p-4 h-[calc(100vh-170px)] overflow-y-auto">
          {mockPRList.map((pr, index) => (
            <PRItem key={index} {...pr} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PRList;
