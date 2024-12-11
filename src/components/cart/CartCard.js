import React from "react";
import { Rating } from "../common";
import { useCart } from "../../context-reducer";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-col relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mb-5  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <i
        class="bi bi-trash absolute text-red-500 right-5 top-5 bg-transparent"
        onClick={() => removeFromCart(product)}
      ></i>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={product.cover}
        alt={product.title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.overview}</p>

        <div className="my-4 select-none">
          {product.best_seller && (
            <span className="bg-green-100 text-green-800 text-m font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300 mr-2">
              Best Seller
            </span>
          )}
          {product.in_stock && (
            <span className="bg-purple-100 text-purple-800 text-m font-medium me-2 px-3 py-1 rounded dark:bg-purple-900 dark:text-purple-300 mr-2">
              In Stock
            </span>
          )}
          {!product.in_stock && (
            <span className="bg-red-100 text-red-800 text-m font-medium me-2 px-3 py-1 rounded dark:bg-red-900 dark:text-red-300 mr-2">
              OUT OF STOCK
            </span>
          )}
          <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
            {product.size} MB
          </span>
        </div>

        <div className="text-3xl font-bold text-gray-900 dark:text-slate-200">
          <i className="bi bi-currency-rupee"></i> {product.price}
        </div>
        <div className="my-3">
          <Rating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
