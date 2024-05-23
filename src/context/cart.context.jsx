import { useState, useEffect, createContext } from "react";

const INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: [],
  count: 0,
  total: 0,
  addItemToCart: () => null,
  reduceItemFromCart: () => null,
  removeItemFromCart: () => null,
  toggleCartDropdown: () => null,
};

// cart utility functions
const doesProductExistInTheCart = (cartItems, product) => {
  const item = cartItems.filter((cartItem) => cartItem.id === product.id);
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

export const CartContext = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCount(
        cartItems.reduce(
          (totalCount, cartItem) =>
            (totalCount = totalCount + cartItem.quantity),
          0
        )
      );

      setTotal(
        cartItems.reduce(
          (totalAmount, cartItem) =>
            (totalAmount = totalAmount + cartItem.quantity * cartItem.price),
          0
        )
      );
    } else {
      setCount(0);
      setTotal(0);
    }
  }, [cartItems]);

  // cart interface functions
  const addItemToCart = (product) =>
    setCartItems(addCartItem(product, cartItems));

  const reduceItemFromCart = (product) =>
    setCartItems(reduceCartItem(product, cartItems));

  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(product, cartItems));

  const toggleCartDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
