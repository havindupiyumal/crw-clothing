import { ReactComponent as CartSVGIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <CartSVGIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
