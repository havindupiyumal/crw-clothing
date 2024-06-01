import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  Total,
} from "./cart-dropdown.styles.jsx";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";
import { toggleCartDropdown } from "../../store/cart/cart.reducer.js";

export const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const toggleCartDropdownHandler = () => dispatch(toggleCartDropdown());

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Total>Total : ${total}</Total>
      <Link onClick={toggleCartDropdownHandler} to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};
