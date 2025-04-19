import PageLink from "./PageLink";
import TrendingList from "./TrendingPortfolio";

function SideBar() {
  return (
    <div className="drawer w-fit lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side h-full">
        <div className="menu text-base-content min-h-full w-80 p-4 flex flex-col gap-5">
          <PageLink />
          <TrendingList />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
