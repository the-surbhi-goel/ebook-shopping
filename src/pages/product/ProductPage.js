import React, { useEffect, useState } from "react";
import { ProductCard, SkeletonProductCard } from "../../components/product";
import { Filter } from "../../components";
import { getBookList } from "../../services";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context-reducer";
import { toast } from "react-toastify";

export const ProductPage = () => {
  const { productList, updateProductList } = useFilter();
  const [showFilters, setFilters] = useState(false);
  const searchParams = useLocation().search;
  const searchTerm = new URLSearchParams(searchParams).get("q");

  useEffect(() => {
    async function getBooks() {
      try {
        const data = await getBookList(searchTerm);
        updateProductList(data);
      } catch (error) {
        toast.error(error, { closeButton: true });
      }
    }
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

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
          {productList?.length &&
            productList?.map((product, index) =>
              product ? (
                <ProductCard key={index} product={product} />
              ) : (
                <SkeletonProductCard key={index} />
              )
            )}
        </div>
      </div>
    </>
  );
};
