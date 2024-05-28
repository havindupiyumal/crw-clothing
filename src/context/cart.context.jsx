import { useReducer, createContext } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: [],
  count: 0,
  total: 0,
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
};

export const cartReducer = (state, action) => {
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
      throw new Error(`Unhandled type Cart Reducer ${type}`);
  }
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

export const CartContext = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isDropdownOpen, cartItems, count, total } = state;

  const updateCartReducer = (newCartItems) => {
    const action = createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      count: getCartCount(newCartItems),
      total: getCartTotal(newCartItems),
    });
    dispatch(action);
  };

  // cart interface functions
  const addItemToCart = (product) =>
    updateCartReducer(addCartItem(product, cartItems));

  const reduceItemFromCart = (product) =>
    updateCartReducer(reduceCartItem(product, cartItems));

  const removeItemFromCart = (product) =>
    updateCartReducer(removeCartItem(product, cartItems));

  const toggleCartDropdown = () => {
    const action = createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN);
    dispatch(action);
  };

  const value = {
    isDropdownOpen,
    cartItems,
    count,
    total,
    addItemToCart,
    reduceItemFromCart,
    removeItemFromCart,
    toggleCartDropdown,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
