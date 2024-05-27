import { Link } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

export const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Link to={title}>
        <Title>{title.toUpperCase()}</Title>
      </Link>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);
