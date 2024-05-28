import { useContext, useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductCard } from "../../components/product-card/product-card.component";

import { CategoryContext } from "../../context/category.context";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
