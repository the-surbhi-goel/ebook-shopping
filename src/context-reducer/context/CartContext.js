import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const initialState = {
  cartList: [],
  cartItemIds: new Set(),
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedList = [...state.cartList, product];
    const s = state.cartItemIds;
    s.add(product.id);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        cartList: updatedList,
        total: state.total + product.price,
        cartItemIds: s,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedList = state.cartList.filter((cart) => cart.id !== product.id);
    const s = state.cartItemIds;
    s.delete(product.id);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        cartList: updatedList,
        total: state.total - product.price,
        cartItemIds: s,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    })
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    cartItemIds: state.cartItemIds,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
