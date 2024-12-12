import React from "react";

export const OrderCard = ({ order }) => {
  return (
    <div className="w-full max-w-full py-5 px-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 dark:text-white">
      <div>{order.createdAt}</div>
      <div className="flex flex-col laptop:flex-row justify-between">
        <div>Order ID: {order.id}</div>
        <div>
          Amount: <i className="bi bi-currency-rupee"></i>
          {order.total}
        </div>
      </div>
      <div className="flex flex-col">
        <div>Name: {order.name}</div>
        <div>Contact No. : {order.phoneNumber}</div>
      </div>
      {order.order.map((product, index) => (
        <div key={index} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row my-5  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={product.cover}
            alt={product.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>

            <div className="my-4 select-none">
              {product.best_seller && (
                <span className="bg-green-100 text-green-800 text-m font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300 mr-2">
                  Best Seller
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </div>

            <div className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <i className="bi bi-currency-rupee"></i> {product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
