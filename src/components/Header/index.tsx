import Dropdown from "./Dropdown";
import Item from "./Item";

function Header() {
  return (
    <div className="w-full">
      <div className="navbar shadow-sm border-b-2 border-[#404040] p-0">
        <div className="navbar-start">
          <Dropdown />
          <Item />
        </div>

        <div className="navbar-center hidden lg:flex"></div>
      </div>
    </div>
  );
}

export default Header;
