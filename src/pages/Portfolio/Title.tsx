function Title({
  title,
  updatedAt,
  username,
}: {
  title: string;
  updatedAt: string;
  username: string;
}) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="text-sm text-gray-500 mt-1 flex gap-2 items-center">
        <span>{username}</span>
        <span>{updatedAt}</span>
        <span className="underline cursor-pointer">수정</span>
      </div>
    </header>
  );
}

export default Title;
