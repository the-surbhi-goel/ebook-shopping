import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../../firebase/config";
import {SkeletonProductCard} from "./SkeletonProductCard"

export const FeaturedProduct = () => {
  const [products, setProducts] = useState([false, false, false]);
  const collectionRef = collection(db, "eBook");
  const dramaQRef = useRef(query(collectionRef, where("featured", "==", true)));

  useEffect(() => {
    async function getFeatureBooks() {
      getDocs(dramaQRef.current)
        .then((data) => {
          let temp = [];
          data.docs.forEach((element) => {
            let data = element.data();
            temp.push({
              ...data,
              id: element.id,
            });
          });
          console.log(temp);
          setProducts(temp);
        })
        .catch((error) => console.log(error));
    }
    getFeatureBooks();
  }, [dramaQRef]);

  return (
    <div className="flex flex-col">
      <h2 className="dark:text-white underline text-2xl text-center mb-8">Featured eBooks</h2>

      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.length &&
          products.map((product, index) =>
            product ? <ProductCard key={index} product={product} /> : <SkeletonProductCard key={index} />
          )}
      </div>
    </div>
  );
};
