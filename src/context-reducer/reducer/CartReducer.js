export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, ...payload };
    case "REMOVE_FROM_CART":
      return { ...state, ...payload };
    case "CLEAR_CART":
      return {
        cartList: [],
        cartItemIds: new Set(),
        total: 0,
      };
    default:
      return { ...state };
  }
};
