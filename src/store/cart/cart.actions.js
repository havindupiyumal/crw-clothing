import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCart = (product, cartItems) =>
  updateCartReducer(addCartItem(product, cartItems));

export const reduceItemFromCart = (product, cartItems) =>
  updateCartReducer(reduceCartItem(product, cartItems));

export const removeItemFromCart = (product, cartItems) =>
  updateCartReducer(removeCartItem(product, cartItems));

export const toggleCartDropdown = () => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN);
};

const updateCartReducer = (newCartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
    count: getCartCount(newCartItems),
    total: getCartTotal(newCartItems),
  });
};

// cart utility functions
const doesProductExistInTheCart = (cartItems, product) => {
  const item = cartItems?.filter((cartItem) => cartItem.id === product.id);
  if (item.length > 0) {
    return item[0];
  }
  return false;
};

const addCartItem = (product, cartItems) => {
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

const reduceCartItem = (product, cartItems) => {
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

const removeCartItem = (product, cartItems) => {
  const existingItem = doesProductExistInTheCart(cartItems, product);
  if (existingItem) {
    const newCartItems = cartItems.filter((cartItem) => {
      if (cartItem.id === existingItem.id) return false;
      return true;
    });
    return newCartItems;
  }
};

const getCartTotal = (cartItems) => {
  return cartItems.reduce(
    (totalAmount, cartItem) =>
      (totalAmount = totalAmount + cartItem.quantity * cartItem.price),
    0
  );
};

const getCartCount = (cartItems) => {
  return cartItems.reduce(
    (totalCount, cartItem) => (totalCount = totalCount + cartItem.quantity),
    0
  );
};
