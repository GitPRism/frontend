import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
