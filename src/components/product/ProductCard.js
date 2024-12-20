import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Rating } from "../common";
import PATH from "../../constants/path";
import { useCart } from "../../context-reducer";

export const ProductCard = ({ product }) => {
  const { id, best_seller, cover, in_stock, overview, price, rating, title } = product;
  const { addToCart, removeFromCart, cartItemIds } = useCart();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link to={`${PATH.products}/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Best Seller
          </span>
        )}
        {in_stock && (
          <span className="absolute top-4 right-2 bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
            In Stock
          </span>
        )}
        <img className="p-8 rounded-t-lg" src={cover ?? Logo} alt="product" />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="dark:text-white">{overview}</p>
        <Rating rating={rating} />
        <div className="flex items-center justify-between">
          <span className="text-3xl mobile:text-2xl font-bold text-gray-900 dark:text-white">
            <i className="bi bi-currency-rupee"></i>
            {price}
          </span>
          {cartItemIds.has(product.id) ? (
            <Button
              onClick={() => removeFromCart(product)}
              classname="bg-red-700 m-0 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Remove
              <i className="bi bi-trash ml-2"></i>
            </Button>
          ) : (
            <Button
              onClick={() => addToCart(product)}
              disabled={in_stock ? "" : "disabled"}
              classname={in_stock ? "m-0" : "m-0 disabled:bg-blue-400 cursor-not-allowed"}
            >
              Add to cart {in_stock}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
