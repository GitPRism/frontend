import Input from "@/components/common/Input";
import { useSearchStore } from "@/store/useSearchStore";
import { X } from "lucide-react";

function Center() {
  {
    /* 가운데: 검색창 (자동 확장) */
  }
  const { searchQuery, setSearchQuery, clearSearchQuery } = useSearchStore();

  return (
    <div className="flex-1 px-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchQuery(e.target.value);
          }}
          className="w-full bg-search-bg pr-10"
        />
        {searchQuery && (
          <button
            onClick={clearSearchQuery}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Center;
