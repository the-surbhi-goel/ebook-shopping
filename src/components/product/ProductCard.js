import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Rating } from "../common";

export const ProductCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link to="/" className="relative">
        <span className="absolute top-4 left-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Best Seller
        </span>
        <span className="absolute top-4 right-2 bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          In Stock
        </span>
        <img className="p-8 rounded-t-lg" src={Logo} alt="product" />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS
        </h5>
        <p className="dark:text-white">
          product description Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </p>
        <Rating />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};
