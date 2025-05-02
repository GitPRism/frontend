import Title from "./Title";
import Content from "./Content";
import Comment from "./Comment";

function Detail() {
  return (
    <main className="mt-4 max-w-3xl m-auto">
      {/* 게시글 헤더 */}
      <Title />
      {/* 본문 */}
      <Content />
      {/* 댓글 섹션 */}
      <Comment />
    </main>
  );
}

export default Detail;
