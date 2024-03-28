import { ReactComponent as CartSVGIcon } from "../../assests/shopping-bag.svg";

import { useContext } from "react";

import "./cart-icon.styles.scss";

import { CartContext } from "../../context/cart.context";

export const CartIcon = () => {
  const { count } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <CartSVGIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
