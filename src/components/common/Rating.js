import React from "react";

export const Rating = ({ rating }) => {
  let ratingArr = new Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArr[i] = true;
  }

  return (
    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {ratingArr.map((rate, index) =>
          rate ? (
            <i key={index} className="bi bi-star-fill text-yellow-300"></i>
          ) : (
            <i key={index} className="bi bi-star-fill text-gray-200"></i>
          )
        )}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        {rating}
      </span>
    </div>
  );
};
