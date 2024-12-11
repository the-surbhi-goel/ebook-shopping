import React from "react";
import { CartLst, EmptyCart } from "../components/cart";

export const CartPage = () => {
  const cartList = [
    {
      best_seller: false,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/6.png",
      description:
        "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
      featured: true,
      id: "Dso61duq2Bk9PxaeAgD1",
      in_stock: false,
      overview: "Harry Potter and the Half-Blood Prince",
      pages: 250,
      price: 1200,
      rating: 3,
      size: 20,
      title: "Harry Potter and the Half-Blood Prince",
    },
  ];

  const total = cartList.reduce((partialSum, product) => partialSum + product.price, 0);

  return <section>{cartList?.length ? <CartLst list={cartList} total={total} /> : <EmptyCart />}</section>;
};
