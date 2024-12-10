import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

export const FeaturedProduct = () => {
  const [products, setProducts] = useState([1, 2, 3]);

  return (
    <div className="flex flex-col">
      <h2 className="dark:text-white underline text-2xl text-center mb-8">Featured eBooks</h2>

      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.length && products.map((product, index) => <ProductCard key={index} />)}
      </div>
    </div>
  );
};
