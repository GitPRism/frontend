import Avatar from "@/components/common/Avatar";
import ToggleList from "./ToggleList";
import { likedPortfolios } from "@/mocks/likedPortfolios";
import { myComments } from "@/mocks/myComments";

function MyActivity() {
  return (
    <>
      {/* 좋아요한 포트폴리오 */}
      <ToggleList
        title="좋아요한 포트폴리오"
        items={likedPortfolios}
        renderItem={(item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-xl">
            <img
              src={item.thumbnail}
              alt="썸네일"
              className="w-44 h-24 object-cover rounded-lg"
            />
            <div className="w-full flex justify-between items-center gap-1">
              <div className="flex flex-col gap-2">
                <p className="text-md font-medium">{item.title}</p>
                <div className="flex items-center gap-4">
                  <Avatar src={item.avatar} width="w-8" />
                  <span className="text-sm text-myportfolio-text-sub">
                    Uropa · 15회 · 18시간 전
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex gap-2">
                <span>❤️ {item.likes}</span>
                <span>💬 {item.comments}</span>
                <span>🔖 {item.bookmarks}</span>
              </div>
            </div>
          </li>
        )}
      />

      {/* 내가 작성한 댓글 */}
      <ToggleList
        title="내가 작성한 댓글"
        items={myComments}
        renderItem={(item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-xl">
            <img
              src={item.thumbnail}
              alt="썸네일"
              className="w-44 h-24 object-cover rounded-lg"
            />

            <div className="w-full flex justify-between items-center gap-1">
              <div className="flex flex-col gap-2">
                <p className="text-md font-medium">{item.title}</p>
                <div className="flex items-center gap-4">
                  <Avatar src={item.avatar} width="w-8" />
                  <span className="text-sm text-myportfolio-text-sub">
                    {item.comment}
                  </span>
                </div>
              </div>
              <div>
                <button className="self-end text-sm text-red-500 hover:underline">
                  삭제
                </button>
              </div>
            </div>

            {/* <div className="flex flex-col gap-1 w-full">
              <p className="text-md font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">{item.comment}</p>
              <button className="self-end text-sm text-red-500 hover:underline">
                삭제
              </button>
            </div> */}
          </li>
        )}
      />
    </>
  );
}

export default MyActivity;
