import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default HeaderLayout;
