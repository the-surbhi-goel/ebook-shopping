import React from "react";

export const Filter = ({ setFilters }) => {
  return (
    <div
      id="drawer-body-scrolling"
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-body-scrolling-label"
    >
      <h5
        id="drawer-body-scrolling-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Filters
      </h5>
      <button
        type="button"
        onClick={() => setFilters(false)}
        data-drawer-hide="drawer-body-scrolling"
        aria-controls="drawer-body-scrolling"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <i className="bi bi-x-square"></i>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Sort By
              </span>
            </button>
            <ul id="dropdown-example" className="py-2 space-y-2">
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="price" id="lowToHigh" />
                  <label htmlFor="lowToHigh" className="ml-3">
                    Price - Low to High
                  </label>
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="price" id="highToLow" />
                  <label htmlFor="highToLow" className="ml-3">
                    Price - High to Low
                  </label>
                </span>
              </li>
              {/* <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Price - Low to High
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  Price - High to Low
                </span>
              </li> */}
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Rating</span>
            </button>
            <ul id="dropdown-example" className="py-2 space-y-2">
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="rating" id="_4star" />
                  <label htmlFor="_4star" className="ml-3">
                    4 <i className="bi bi-star-fill"></i> and Above
                  </label>
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="rating" id="_3star" />
                  <label htmlFor="_3star" className="ml-3">
                    3 <i className="bi bi-star-fill"></i> and Above
                  </label>
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="rating" id="_2star" />
                  <label htmlFor="_2star" className="ml-3">
                    2 <i className="bi bi-star-fill"></i> and Above
                  </label>
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="radio" name="rating" id="_1star" />
                  <label htmlFor="_1star" className="ml-3">
                    1 <i className="bi bi-star-fill"></i> and Above
                  </label>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Others</span>
            </button>
            <ul id="dropdown-example" className="py-2 space-y-2">
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="checkbox" name="bestSeller" id="bestSeller" />
                  <label htmlFor="bestSeller" className="ml-3">
                    Best Seller Only
                  </label>
                </span>
              </li>
              <li>
                <span className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <input type="checkbox" name="stock" id="stock" />
                  <label htmlFor="stock" className="ml-3">
                    InStock Only
                  </label>
                </span>
              </li>
            </ul>
          </li>
          <li className="flex">
            <button className="text-white flex-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Clear Filters
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
