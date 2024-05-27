import { CategoriesMenuContainer } from "./menu.styles.jsx";

import { MenuItem } from "../menu-item/menu-item.component";

export const Menu = ({ categories }) => {
  return (
    <CategoriesMenuContainer>
      {categories.map((category) => {
        return <MenuItem key={category.id} category={category} />;
      })}
    </CategoriesMenuContainer>
  );
};
