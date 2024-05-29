import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { addItemToCart } from "../../store/cart/cart.actions.js";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(product, cartItems));

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
