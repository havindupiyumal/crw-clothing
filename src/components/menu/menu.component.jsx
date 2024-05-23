import "./menu.styles.scss";

import { MenuItem } from "../menu-item/menu-item.component";

export const Menu = ({ categories }) => {
  return (
    <div className="categories-menu-container">
      {categories.map((category) => {
        return <MenuItem key={category.id} category={category} />;
      })}
    </div>
  );
};
