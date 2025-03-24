import Avatar from "./Avatar";
import ProjectList from "./ProjectList";
import PortfolioLink from "./PortfolioLink";

function SideBar() {
  return (
    <div className="drawer w-fit lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side bg-charcoal ">
        <div className="h-full p-4 flex flex-col justify-between items-center">
          <Avatar />

          <ul className="menu w-80 p-4">
            <ProjectList />

            <PortfolioLink />
          </ul>

          <p className="text-white cursor-pointer hover:text-red-400">
            로그아웃
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
