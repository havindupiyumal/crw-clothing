import { createSelector } from "reselect";

const selectCategoriesArray = (state) => state.categories.categoriesArray;

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) => {
    console.log(categoriesArray);
    const categoryMap = categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap;
  }
);
