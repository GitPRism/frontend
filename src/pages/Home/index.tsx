import PRList from "./PRList";
import { useParams } from "react-router-dom";
function Home() {
  const { projectId } = useParams();
  console.log(projectId);

  return (
    <>
      <PRList />
    </>
  );
}

export default Home;
