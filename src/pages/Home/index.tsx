import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import PRList from "./PRList";

function Home() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="w-full">
        <Header />
        <PRList />
      </div>
    </div>
  );
}

export default Home;
