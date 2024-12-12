import React from "react";
import PATH from "../../constants/path";
import { Link } from "react-router-dom";
import Oops from "../../assets/oops.png";

export const OrderFail = () => {
  return (
    <section className="flex justify-center">
      <div className="text-center max-w-sm bg-white border border-gray-200 py-3 px-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={Oops} alt="fail" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Oops! Something went wrong
          </h5>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
            Please try again after some time
          </p>
          <Link
            to={PATH.products}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 my-2 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-blue-800"
          >
            Explore eBooks
          </Link>
        </div>
      </div>
    </section>
  );
};
