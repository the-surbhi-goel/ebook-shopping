import React from "react";
import { Accordion } from "../common";
import FAQS from "../../constants/faq";
import { Link } from "react-router-dom";
import PATH from "../../constants/path";

export const Faq = () => {
  const faqs = FAQS.slice(0, 3);

  return (
    <div className="flex flex-col my-10 border rounded p-5">
      <h2 className="dark:text-white underline text-2xl text-center mb-8">FAQs</h2>

      <div className="flex flex-col flex-wrap justify-center">
        <div id="accordion-collapse" data-accordion="collapse">
          {faqs.length && faqs.map((faq, index) => <Accordion key={index} faq={faq} />)}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          to={PATH.faq}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-blue-800"
        >
          More FAQs
        </Link>
      </div>
    </div>
  );
};
