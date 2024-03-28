import { useContext } from "react";

import "./cart-dropdown.styles.scss";

import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";

export const CartDropdown = () => {
  const { isDropdownOpen, cartItems, total } = useContext(CartContext);

  const hidden = isDropdownOpen ? "display" : "hidden";

  return (
    <div className={`cart-dropdown-container ${hidden}`}>
      {cartItems.length === 0 ? (
        <div className="empty-message">
          <p>No items in the cart</p>
        </div>
      ) : (
        cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })
      )}
      {total}
      <Button>Checkout</Button>
    </div>
  );
};
