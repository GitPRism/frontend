import Profile from "@/assets/Profile.png";

function Avatar() {
  return (
    <div className="avatar flex flex-col">
      <div className="w-24 rounded-full">
        <img src={Profile} />
      </div>
      <p className="text-center">coder-ssy</p>
    </div>
  );
}

export default Avatar;
