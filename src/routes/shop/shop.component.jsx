import { Routes, Route } from "react-router-dom";

import { Category } from "../category/category.component";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";
import { useEffect } from "react";
import { getProductsAndCategories } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(setCategoriesMap(await getProductsAndCategories()));
      } catch (err) {
        console.log("Error occured when fetching Products");
      }
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
