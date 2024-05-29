import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => categories.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) => {
    const categoryMap = categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap;
  }
);
