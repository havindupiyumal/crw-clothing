import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectIsCartDropwdownOpen = (state) => state.cart.isDropdownOpen;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalAmount, cartItem) =>
      (totalAmount = totalAmount + cartItem.quantity * cartItem.price),
    0
  )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalCount, cartItem) => (totalCount = totalCount + cartItem.quantity),
    0
  )
);
