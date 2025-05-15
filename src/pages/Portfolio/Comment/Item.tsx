import Avatar from "@/components/common/Avatar";

function Item({ comment }: { comment: any }) {
  return (
    <li className="flex items-start gap-2">
      <Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <div className="flex-1">
        <p className="font-medium">
          {comment.userName}
          <span className="text-sm text-gray-500 ml-2">
            {comment.createdAt}
          </span>
        </p>
        <p>{comment.comment}</p>
      </div>
      <span className="text-sm text-gray-400 cursor-pointer">설정</span>
    </li>
  );
}

export default Item;
