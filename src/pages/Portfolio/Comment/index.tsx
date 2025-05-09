import InputForm from "./InputForm";
import List from "./List";

function Comment() {
  return (
    <section aria-label="댓글 영역" className="mt-8">
      <p className="text-lg font-semibold">댓글 5</p>
      <InputForm />
      <List />
    </section>
  );
}

export default Comment;
