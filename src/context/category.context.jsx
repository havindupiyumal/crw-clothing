import { createContext, useEffect, useState } from "react";

import { getProductsAndCategories } from "../utils/firebase/firebase.utils";

export const CategoryContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setCategoriesMap(await getProductsAndCategories());
      } catch (err) {
        console.log("Error occured when fetching Products");
      }
    })();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
