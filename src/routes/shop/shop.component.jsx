import { Routes, Route } from "react-router-dom";

import { Category } from "../category/category.component";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/categories.actions";
import { useDispatch } from "react-redux";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchCategoriesStart());
    } catch (err) {
      console.log("Error occured when fetching Products");
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
