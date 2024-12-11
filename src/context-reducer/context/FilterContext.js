import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer";

const initialState = {
  productList: [false, false, false, false, false, false],
  inStockOnly: null,
  bestSellerOnly: null,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(initialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateProductList = (productList) => {
    dispatch({
      type: "LIST",
      payload: {
        productList: productList,
      },
    });
  };

  const setInStockOnly = () => {
    dispatch({
      type: "IN_STOCK_ONLY",
      payload: {
        inStockOnly: !state.inStockOnly,
      },
    });
  };

  const setBestSeller = () => {
    dispatch({
      type: "BEST_SELLER_ONLY",
      payload: {
        bestSellerOnly: !state.bestSellerOnly,
      },
    });
  };

  const setSortBy = (val) => {
    dispatch({
      type: "SORT_BY",
      payload: {
        sortBy: val,
      },
    });
  };

  const setRating = (val) => {
    dispatch({
      type: "RATING",
      payload: {
        rating: val,
      },
    });
  };

  const filteredProducts = () => {
    let filteredBooks = state.productList;

    //filter stockonly
    if (state.inStockOnly) {
      filteredBooks = filteredBooks.filter((product) => product.in_stock === true);
    }

    //filter bestSeller only
    if (state.bestSellerOnly) {
      filteredBooks = filteredBooks.filter((product) => product.best_seller === true);
    }

    //filter rating
    filteredBooks = filteredBooks.filter((product) => product.rating >= state.rating);

    //sorting
    if (state.sortBy === "lowToHigh") {
      filteredBooks = filteredBooks.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (state.sortBy === "highToLow") {
      filteredBooks = filteredBooks.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }

    return filteredBooks;
  };

  const clearFilter = () => {
    dispatch({
      type: "CLEAR_FILTER",
    });
  };

  const value = {
    productList: filteredProducts(),
    inStockOnly: state.inStockOnly,
    bestSellerOnly: state.bestSellerOnly,
    sortBy: state.sortBy,
    rating: state.rating,
    setInStockOnly,
    setBestSeller,
    setSortBy,
    setRating,
    updateProductList: updateProductList,
    clearFilter,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
