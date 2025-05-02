import Center from "./Center";
import End from "./End";
import Start from "./Start";

function Header() {
  return (
    <div className="navbar shadow-sm border-b-2 border-[#404040] p-0">
      <Start />
      <Center />
      <End />
    </div>
  );
}

export default Header;
