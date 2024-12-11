import React from "react";
import { CartLst, EmptyCart } from "../components/cart";
import { useCart } from "../context-reducer";

export const CartPage = () => {
  const { cartList } = useCart();

  const total = cartList.reduce((partialSum, product) => partialSum + product.price, 0);

  return (
    <section>
      {cartList?.length ? <CartLst list={cartList} total={total} /> : <EmptyCart />}
    </section>
  );
};
