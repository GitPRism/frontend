import Item from "./Item";

function List({ comments }: { comments: any }) {
  return (
    <ul className="space-y-4 bg-section-bg p-4 rounded-2xl">
      {comments?.map((comment: any) => (
        <Item key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default List;
