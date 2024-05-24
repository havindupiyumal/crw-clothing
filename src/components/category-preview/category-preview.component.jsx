import { Link } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";

import "./category-preview.styles.scss";

export const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link to={title}>
        <span className="title">{title.toUpperCase()}</span>
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);