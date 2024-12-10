import React, { useEffect, useState } from "react";
import { Rating } from "../../components/common";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();

  const addToCart = () => {};
  const removeFromCart = () => {};

    useEffect(() => {
      async function getBookDetail() {
        const collectionRef = doc(db, "eBook", id);

        try {
          const docSnap = await getDoc(collectionRef);
          console.log("docSnap ", docSnap);
          if (docSnap.exists()) {
            setProduct(docSnap.data());
          } else {
            alert("Book Doesn't exist");
          }
        } catch (error) {
          console.log(error);
        }
      }
      getBookDetail();
    }, [id]);

  return (
    <div className="mb-10 p-10">
      <h1 className="text-4xl text-center dark:text-white">
        {product.title ?? <Skeleton width="200px" />}
      </h1>
      <div className="flex flex-row flex-wrap justify-around mt-10">
        <div className="max-w-xl my-3 text-center">
          <img className="rounded" src={product.cover ?? Logo} alt={product.name} />
        </div>
        <div className="max-w-xl my-3">
          <p className="mt-5 text-lg dark:text-white">
            {product.overview ?? <Skeleton width="100px" />}
          </p>
          <p className="text-lg text-gray-900 dark:text-slate-200">
            {product.description ?? <Skeleton count={3} />}
          </p>

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

          {/* Price */}
          <div className="text-3xl font-bold text-gray-900 dark:text-slate-200">
          <i class="bi bi-currency-rupee"></i> {product.price}
          </div>
          <div className="my-3">
            <Rating rating={product.rating} />
          </div>
          <div className="my-3">
            {!inCart && (
              <button
                onClick={() => addToCart(product)}
                className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 disabled:bg-blue-400 ${
                  product.in_stock ? "" : "cursor-not-allowed"
                }`}
                disabled={product.in_stock ? "" : "disabled"}
              >
                Add To Cart
              </button>
            )}
            {inCart && (
              <button
                onClick={() => removeFromCart(product)}
                className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                  product.in_stock ? "" : "cursor-not-allowed"
                }`}
              >
                Remove Item <i className="ml-1 bi bi-trash3"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
