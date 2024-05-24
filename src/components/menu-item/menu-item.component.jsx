import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="menu-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-body-container">
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
        </Link>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
