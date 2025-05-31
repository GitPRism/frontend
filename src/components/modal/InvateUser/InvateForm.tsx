import { useState } from "react";

function InvateForm() {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("EDITOR");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userId, role);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-bold text-lg mb-4">👥 사용자 초대</h3>
        <input
          type="number"
          placeholder="초대할 사용자 아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input input-bordered w-full "
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="EDITOR">EDITOR</option>
          <option value="VIEWER">VIEWER</option>
        </select>
        <button type="submit" className="btn btn-primary w-full">
          초대
        </button>
      </div>
    </form>
  );
}

export default InvateForm;
