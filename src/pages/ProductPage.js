import React, { useState } from "react";
import { ProductCard } from "../components/product";
import { Filter } from "../components";

export const ProductPage = () => {
  const [products, setProducts] = useState([false, false, false, false, false, false]);
  const [showFilters, setFilters] = useState(false);

  return (
    <>
      {showFilters && <Filter setFilters={setFilters} />}
      <div className="flex flex-col mb-10 p-5">
        <div className="flex flex-row justify-between">
          <h2 className="dark:text-white underline text-2xl mb-8">All eBooks</h2>
          <i
            className="bi bi-filter-square-fill cursor-pointer dark:text-white text-xl"
            onClick={() => setFilters(!showFilters)}
          ></i>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.length && products.map((product, index) => <ProductCard key={index} />)}
        </div>
      </div>
    </>
  );
};
