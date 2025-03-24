import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default HeaderLayout;
