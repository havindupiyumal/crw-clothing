import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const createCartReducerAction = (newCartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
  });
};

const doesProductExistInTheCart = (cartItems, product) => {
  const item = cartItems?.filter((cartItem) => cartItem.id === product.id);
  if (item.length > 0) {
    return item[0];
  }
  return false;
};

export const addCartItem = (product, cartItems) => {
  const existingItem = doesProductExistInTheCart(cartItems, product);
  if (existingItem) {
    const newCartItems = cartItems.map((cartItem) => {
      if (existingItem.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    return newCartItems;
  } else {
    const newCartItem = {
      ...product,
      quantity: 1,
    };
    return [...cartItems, newCartItem];
  }
};

export const reduceCartItem = (product, cartItems) => {
  const existingItem = doesProductExistInTheCart(cartItems, product);

  if (existingItem.quantity === 1) {
    return removeCartItem(product, cartItems);
  }

  if (existingItem) {
    const newCartItems = cartItems.map((cartItem) => {
      if (existingItem.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    return newCartItems;
  }
};

export const removeCartItem = (product, cartItems) => {
  const existingItem = doesProductExistInTheCart(cartItems, product);
  if (existingItem) {
    const newCartItems = cartItems.filter((cartItem) => {
      if (cartItem.id === existingItem.id) return false;
      return true;
    });
    return newCartItems;
  }
};
