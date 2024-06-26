import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const addItemToCartHandler = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};
