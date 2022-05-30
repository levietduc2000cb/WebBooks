import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  function handleClick() {
    // eslint-disable-next-line no-useless-escape
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(inputSearch)) {
      return;
    }
    if (!inputSearch.trim()) {
      return;
    }
    navigate(`/search/${inputSearch}`);
  }
  return (
    <div className="w-[160px] md:w-[450px] flex text-xs h-7">
      <div className="flex-1">
        <input
          value={inputSearch}
          className="w-full h-full outline-none border-0 px-2 py-2"
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        ></input>
      </div>
      <div onClick={handleClick}>
        <button className="hidden md:block px-[14px] font-bold bg-[#F2F2F2] text-[#00CC7D] w-full h-full">
          Tìm
        </button>
        <div className="md:hidden flex justify-center items-center w-[30px] bg-red-500 h-full">
          <HiSearch className="text-white font-bold" />
        </div>
      </div>
    </div>
  );
}
export default Search;
