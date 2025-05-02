import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
