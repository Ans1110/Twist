import { BsSearchHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";
import type { KeyboardEvent } from "react";

interface SInputProps {
  name: string;
  isLoading: boolean;
  onSearch: (searchTerm: string) => void;
}

const SInput = ({ name, isLoading, onSearch }: SInputProps) => {
  const [searchTerm, setSearchTerm] = useState(name || "");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 w-full border border-white/20 rounded-lg box-border ring-2 ring-white/20 hover:border-white/40">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search your favorite cocktail"
        className="p-2 w-full bg-transparent border-none focus:outline-none text-white"
      />

      <div
        className="p-2 bg-white/20 rounded-lg cursor-pointer hover:bg-white/40 transition-all duration-300"
        onClick={handleSearch}
      >
        {isLoading ? (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 24, color: "#FAA0BF" }}
                spin
              />
            }
            size="small"
          />
        ) : (
          <BsSearchHeart size={24} color="#FAA0BF" />
        )}
      </div>
    </div>
  );
};

export default SInput;
