import { useState } from "react";

export const Accordion = ({ faq }) => {
  const { heading, desc } = faq;
  const [show, setShow] = useState(false);

  return (
    <>
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center border-b dark:border-gray-500 justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick={() => setShow(!show)}
        >
          <span>{heading}</span>
          {show ? <i className="bi bi-arrow-up-short"></i> : <i className="bi bi-arrow-down-short"></i>}
        </button>
      </h2>
      {show && (
        <div
          id="accordion-collapse-body-1"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};
