import React from "react";
import { Link } from "react-router-dom";
import PATH from "../../constants/path";

export const LoggedInDropdown = ({ setDropdown }) => {
  return (
    <div
      id="dropdownDivider"
      className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDividerButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to={PATH.home}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to={PATH.orders}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to={PATH.products}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Products
          </Link>
        </li>
      </ul>
      <div className="py-2">
        <Link
          onClick={() => setDropdown(false)}
          to="/"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
