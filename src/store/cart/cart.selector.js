import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectIsCartDropwdownOpen = (state) => state.cart.isDropdownOpen;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  [selectCart],
  (cart) => cart.count
);

export const selectCartTotal = createSelector(
  [selectCart],
  (cart) => cart.total
);
