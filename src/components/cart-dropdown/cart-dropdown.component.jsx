import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  Total,
} from "./cart-dropdown.styles.jsx";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

export const CartDropdown = () => {
  const { cartItems, total, toggleCartDropdown } = useContext(CartContext);

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
      <Link onClick={() => toggleCartDropdown()} to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};
