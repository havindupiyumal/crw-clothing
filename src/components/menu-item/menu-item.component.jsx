import { Link } from "react-router-dom";
import {
  MenuContainer,
  BackgroundImage,
  MenuBodyContainer,
} from "./menu-item.styles.jsx";

export const MenuItem = ({ category: { title, imageUrl } }) => {
  return (
    <MenuContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <MenuBodyContainer>
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
        </Link>
        <p>Shop Now</p>
      </MenuBodyContainer>
    </MenuContainer>
  );
};
