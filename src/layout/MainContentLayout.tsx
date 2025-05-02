import { Outlet } from "react-router-dom";

function MainContentLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

export default MainContentLayout;
