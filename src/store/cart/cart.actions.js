import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import {
  addCartItem,
  createCartReducerAction,
  reduceCartItem,
  removeCartItem,
} from "./cart.utlis";

export const addItemToCart = (product, cartItems) =>
  createCartReducerAction(addCartItem(product, cartItems));

export const reduceItemFromCart = (product, cartItems) =>
  createCartReducerAction(reduceCartItem(product, cartItems));

export const removeItemFromCart = (product, cartItems) =>
  createCartReducerAction(removeCartItem(product, cartItems));

export const toggleCartDropdown = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN);
