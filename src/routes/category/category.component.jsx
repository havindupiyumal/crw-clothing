import { useContext, useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductCard } from "../../components/product-card/product-card.component";

import { CategoryContext } from "../../context/category.context";

import "./category.styles.scss";

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Link to={`/${category}`}>
        <h2 className="category-title">{category.toUpperCase()}</h2>
      </Link>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
