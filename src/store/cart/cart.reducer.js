import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: [],
  count: 0,
  total: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    default:
      return {
        ...state,
      };
  }
};
