export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LIST":
      return { ...state, productList: payload.productList };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATING":
      return { ...state, rating: payload.rating };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "IN_STOCK_ONLY":
      return { ...state, inStockOnly: payload.inStockOnly };
    case "CLEAR_FILTER":
      return { ...state, inStockOnly: null, bestSellerOnly: null, sortBy: null, rating: null };
    default:
      return { ...state };
  }
};
