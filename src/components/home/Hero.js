import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import PATH from "../../constants/path";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-white items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          An ebook (short for electronic book), also spelled as e-book or eBook, is a book
          publication made available in electronic form, consisting of text, images, or both,
          readable on the flat-panel display of computers or other electronic devices.
        </p>
        <Link
          to={PATH.products}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-h-full" src={Logo} alt="eBook Store" />
      </div>
    </section>
  );
};
