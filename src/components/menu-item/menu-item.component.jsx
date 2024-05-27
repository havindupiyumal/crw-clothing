import { Link, useNavigate } from "react-router-dom";
import {
  MenuContainer,
  BackgroundImage,
  MenuBodyContainer,
} from "./menu-item.styles.jsx";

export const MenuItem = ({ category: { title, imageUrl, route } }) => {
  const naviagte = useNavigate();

  const onNavigateHandler = () => naviagte(route);

  return (
    <MenuContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <MenuBodyContainer>
        <Link to={route}>
          <h2>{title}</h2>
        </Link>
        <p>Shop Now</p>
      </MenuBodyContainer>
    </MenuContainer>
  );
};
