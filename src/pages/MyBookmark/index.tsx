import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import BookmarkList from "./BookmarkList";

function MyBookmark() {
  const { data, isLoading } = useQuery({
    queryKey: ["myBookmark"],
    queryFn: () => apiClient.get("/api/v1/portfolios/bookmarks/me"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <>
      <BookmarkList title="북마크" items={data?.data.bookmarks} />
    </>
  );
}

export default MyBookmark;
