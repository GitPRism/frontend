import Input from "@/components/common/Input";
import { useState } from "react";
function Center() {
  {
    /* 가운데: 검색창 (자동 확장) */
  }
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex-1 px-4">
      <Input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => {
          console.log(e.target.value);
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Center;
