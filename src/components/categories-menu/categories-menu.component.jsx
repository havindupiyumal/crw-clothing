import "./categories-menu.styles.scss";

import { CategoryItem } from "../category-item/category-item.component";

export const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-menu-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};
