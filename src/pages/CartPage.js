import React from "react";
import { CartLst, EmptyCart } from "../components/cart";

export const CartPage = () => {
  const cartList = [];

  return <section>{cartList?.length ? <CartLst /> : <EmptyCart />}</section>;
};
