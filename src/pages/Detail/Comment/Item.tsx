import Avatar from "@/components/common/Avatar";

function Item() {
  return (
    <li className="flex items-start gap-2">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <div className="flex-1">
        <p className="font-medium">
          Uropa <span className="text-sm text-gray-500 ml-2">4시간 전</span>
        </p>
        <p>공유 감사합니다~</p>
      </div>
      <span className="text-sm text-gray-400 cursor-pointer">설정</span>
    </li>
  );
}

export default Item;
