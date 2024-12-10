import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import PATH from "../../constants/path";

export const Search = ({setShowSearch}) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const onSearch = (event) => {
    event.preventDefault();
    setShowSearch(false);
    navigate(`${PATH.products}?q=${searchRef.current.value}`);
  };

  return (
    <form onSubmit={onSearch} className="flex flex-row items-center py-1 p-5 absolute top-54px left-0 right-0">
      <div className="relative w-full">
        <span className="bi bi-search text-gray-800 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none dark:text-gray-400"></span>
        <input
          ref={searchRef}
          name="search"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search"
          autoComplete="off"
          required="required"
        />
      </div>
    </form>
  );
};
