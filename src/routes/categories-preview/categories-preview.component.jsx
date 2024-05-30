import { Fragment } from "react";

import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoryIsLoading,
} from "../../store/categories/categories.selector";
import { Spinner } from "../../components/spinner/spinner.component";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const categoriesIsLoading = useSelector(selectCategoryIsLoading);

  return (
    <Fragment>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
