import Avatar from "@/components/common/Avatar";
import BookmarkList from "./BookmarkList";
import { myBookmark } from "@/mocks/myBookmark";

function MyBookmark() {
  return (
    <>
      <BookmarkList
        title="북마크"
        items={myBookmark}
        renderItem={(item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 rounded-xl p-4 hover:bg-section-bg"
          >
            <img
              src={item.thumbnail}
              alt="썸네일"
              className="w-44 h-24 object-cover rounded-lg"
            />
            <div className="w-full flex justify-between itmes-center gap-1">
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
    </>
  );
}

export default MyBookmark;
