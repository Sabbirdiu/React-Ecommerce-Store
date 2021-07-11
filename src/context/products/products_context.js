import React, { useReducer, useContext } from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../../actions";
import reducer from "../../reducers/products/products_reducer";
import { products_url as url } from "../../utils/constants/constants";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
